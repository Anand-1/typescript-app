import React, { useState } from 'react';

export default function SignupWizard() {
    const [step, setStep] = useState(1);

    // Step 1 State
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    // Step 2 State
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Field-level validations
    const isEmailValid = (emailStr: string) => {
        // Simple robust regex for standard email layout
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
    };

    const isStep1Valid = () => {
        return firstName.trim().length > 0 &&
            lastName.trim().length > 0 &&
            isEmailValid(email);
    };

    const isStep2Valid = () => {
        return password.length >= 6 &&
            password === confirmPassword;
    };

    // Navigation actions
    const handleNext = () => {
        if (step === 1 && isStep1Valid()) setStep(2);
        else if (step === 2 && isStep2Valid()) setStep(3);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(JSON.stringify({ firstName, lastName, email, password }, null, 2));
    };

    return (
        <div className="wizard-container" style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>

            {/* Step Indicator Visual Anchor */}
            <div className="step-indicator" style={{ marginBottom: '20px', fontWeight: 'bold', color: '#555' }}>
                Step {step} of 3
            </div>

            <form onSubmit={handleSubmit}>

                {/* STEP 1: Text Fields */}
                {step === 1 && (
                    <div className="step-content" data-testid="step-1">
                        <h3 style={{ marginTop: 0 }}>Personal Details</h3>
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', marginBottom: '4px' }}>First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                                placeholder="John"
                            />
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', marginBottom: '4px' }}>Last Name</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                                placeholder="Doe"
                            />
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', marginBottom: '4px' }}>Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                                placeholder="john.doe@example.com"
                            />
                            {email && !isEmailValid(email) && (
                                <span style={{ color: 'red', fontSize: '12px' }}>Please enter a valid email.</span>
                            )}
                        </div>
                    </div>
                )}

                {/* STEP 2: Password Security */}
                {step === 2 && (
                    <div className="step-content" data-testid="step-2">
                        <h3 style={{ marginTop: 0 }}>Security</h3>
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', marginBottom: '4px' }}>Password (min 6 characters)</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', marginBottom: '4px' }}>Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                            />
                            {confirmPassword && password !== confirmPassword && (
                                <span style={{ color: 'red', fontSize: '12px' }}>Passwords do not match.</span>
                            )}
                        </div>
                    </div>
                )}

                {/* STEP 3: Summary & Confirmation Screen */}
                {step === 3 && (
                    <div className="step-content" data-testid="step-3">
                        <h3 style={{ marginTop: 0 }}>Review & Confirm</h3>
                        <div style={{ backgroundColor: '#f9f9f9', padding: '12px', borderRadius: '4px', marginBottom: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <p style={{ margin: '4px 0' }}><strong>Name:</strong> {firstName} {lastName}</p>
                            <p style={{ margin: '4px 0' }}><strong>Email:</strong> {email}</p>
                            <p style={{ margin: '4px 0' }}><strong>Password:</strong> *******</p>
                        </div>
                    </div>
                )}

                {/* Dynamic Navigation Action Panel */}
                <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
                        >
                            Back
                        </button>
                    )}

                    <div style={{ marginLeft: 'auto' }}>
                        {step < 3 ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                disabled={step === 1 ? !isStep1Valid() : !isStep2Valid()}
                                style={{
                                    padding: '8px 16px',
                                    cursor: (step === 1 ? isStep1Valid() : isStep2Valid()) ? 'pointer' : 'not-allowed',
                                    backgroundColor: (step === 1 ? isStep1Valid() : isStep2Valid()) ? '#007bff' : '#ccc',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px'
                                }}
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}
                            >
                                Submit Registration
                            </button>
                        )}
                    </div>
                </div>

            </form>
        </div>
    );
}
