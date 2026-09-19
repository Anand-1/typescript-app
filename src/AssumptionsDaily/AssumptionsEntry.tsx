import React, { ChangeEvent, FormEvent } from "react";

type AssumptionFormValues = {
  assumption: string;
  action: string;
  inference: string;
};

// Minimal Formik-like helper types: the file models the render-props API shape
// without importing the external Formik components.
type FormikHelpers<V> = {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
};

type FormikRenderProps<V> = {
  values: V;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (event?: FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
};

type FormikProps<V> = {
  initialValues: V;
  onSubmit: (values: V, helpers: FormikHelpers<V>) => void | Promise<void>;
  children: React.ReactNode | ((props: FormikRenderProps<V>) => React.ReactNode);
};

const Formik = <V extends Record<string, any>>({ initialValues, onSubmit, children }: FormikProps<V>) => {
  // Form state pattern: values and submission status are owned by the form controller.
  const [values, setValues] = React.useState<V>(initialValues);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Generic controlled-field pattern: input name selects which value field to update.
    const { name, value } = event.target;
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleBlur = () => undefined;

  const resetForm = () => {
    setValues(initialValues);
  };

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    // Submit orchestration pattern: prevent browser submit, call user handler, then reset status.
    event?.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit(values, {
        setSubmitting: setIsSubmitting,
        resetForm,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formikProps: FormikRenderProps<V> = {
    values,
    errors: {},
    touched: {},
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  };

  if (typeof children === "function") {
    // Render props pattern: expose form state and handlers to the caller's JSX function.
    return <>{(children as (props: FormikRenderProps<V>) => React.ReactNode)(formikProps)}</>;
  }

  return <>{children}</>;
};

const Form = ({ children, onSubmit, ...props }: React.FormHTMLAttributes<HTMLFormElement>) => {
  // Thin wrapper pattern: keep the public API similar to Formik's <Form>.
  return <form onSubmit={onSubmit} {...props}>{children}</form>;
};

const Field = ({
  id,
  name,
  as,
  value,
  onChange,
  onBlur,
  rows,
  style,
  placeholder,
  ...props
}: any) => {
  // Field abstraction pattern: share input props and switch element type with the `as` prop.
  const commonProps = {
    id,
    name,
    value: value ?? "",
    onChange,
    onBlur,
    placeholder,
    style,
    ...props,
  };

  if (as === "textarea") {
    return <textarea {...commonProps} rows={rows} />;
  }

  return <input {...commonProps} />;
};

const AssumptionsEntry = () => {
  // Initial values pattern: one object defines the shape and defaults for the form.
  const initialValues: AssumptionFormValues = {
    assumption: "",
    action: "",
    inference: "",
  };

  const submitPayload = async (values: AssumptionFormValues) => {
    // Payload mapping pattern: add metadata at submit time instead of storing it in form state.
    const payload = {
      ...values,
      timestamp: new Date().toISOString(),
    };

    const response = await fetch("http://127.0.0.1:8000/results", {
      // API integration pattern: serialize form state into a JSON POST body.
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  };

  return (
    <section className="example-page">
      <header className="example-header">
        <h1>Assumptions Form Example</h1>
        <p>
          A small Formik-style render-props form that controls textarea fields,
          submits JSON, and resets after a successful request.
        </p>
        <div className="example-links">
          <a href="https://formik.org/docs/overview" target="_blank" rel="noreferrer">
            Open Formik Docs
          </a>
        </div>
      </header>

      <section className="example-panel">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              // Submit success pattern: persist, then reset the controlled form.
              await submitPayload(values);
              resetForm();
            } catch (error) {
              console.error("Failed to submit assumption", error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label htmlFor="assumption" style={{ display: "block", marginBottom: 6 }}>
                  Assumption
                </label>
                <Field
                  id="assumption"
                  name="assumption"
                  as="textarea"
                  rows={4}
                  value={values.assumption}
                  onChange={handleChange}
                  placeholder="Describe the assumption"
                  style={{ width: "100%", padding: 12, boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label htmlFor="action" style={{ display: "block", marginBottom: 6 }}>
                  Action
                </label>
                <Field
                  id="action"
                  name="action"
                  as="textarea"
                  rows={4}
                  value={values.action}
                  onChange={handleChange}
                  placeholder="What action will be taken?"
                  style={{ width: "100%", padding: 12, boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label htmlFor="inference" style={{ display: "block", marginBottom: 6 }}>
                  Inference
                </label>
                <Field
                  id="inference"
                  name="inference"
                  as="textarea"
                  rows={4}
                  value={values.inference}
                  onChange={handleChange}
                  placeholder="State the inference"
                  style={{ width: "100%", padding: 12, boxSizing: "border-box" }}
                />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit assumption"}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </section>
  );
};

export default AssumptionsEntry;
