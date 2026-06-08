import React from "react";

const SnippitSlider = ({ data }: { data: any }) => {
  return (
    <div className="snippit-slider">
      <div className="code-container">
        <div className="code-header">
          <span>JavaScript</span>
          <button
            onClick={() => {
              const code =
                document.getElementById("code-block")?.textContent || "";
              navigator.clipboard.writeText(code).catch(() => {
                /* ignore clipboard errors */
              });
            }}
          >
            Copy
          </button>
        </div>

        <pre id="code-block">
          <code>{data.name}</code>
        </pre>
        <button
          onClick={() => {
            const code =
              document.getElementById("code-block")?.textContent || "";
            try {
              const fn = new Function(code);
              fn();
            } catch (error) {
              console.error("Error executing code:", error);
            }
          }}
        >
          Run
        </button>
        <button onClick={editCode}>Edit</button>
      </div>
    </div>
  );
};

function editCode() {
  const codeElem = document.getElementById("code-block");
  const current = codeElem?.textContent || "";
  const updated = window.prompt("Edit code:", current);
  if (updated !== null && codeElem) {
    codeElem.textContent = updated;
  }
}

export default SnippitSlider;