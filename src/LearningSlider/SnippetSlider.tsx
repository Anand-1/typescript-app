import React from "react";
import MyModal from "../Features/Portals";
const SnippitSlider = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [displayOutput, setDisplayOutput] = React.useState<string>("");
  function editCode() {
  const codeElem = document.getElementById("code-block");
  const current = codeElem?.textContent || "";
  const updated = window.prompt("Edit code:", current);
  if (updated !== null && codeElem) {
    codeElem.textContent = updated;
  }
}

function runCode() {
  const code = document.getElementById("code-block")?.textContent || "";
  setIsOpen(true);
  // Run Code and capture output
  try {
    const originalLog = console.log;
    let output = "";
    console.log = (message: any) => {
      output += message + "\n";
    };
    const fn = new Function(code);
    fn();
    console.log = originalLog;
    setDisplayOutput(output);
    
  } catch (error) {
    const outputElem = document.getElementById("output");
    if (outputElem) {
      outputElem.textContent = "Error executing code: " + error;
    }
  } 
}
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
        <div className="changeButtons">
          <button onClick={runCode}>Run</button>
          <button onClick={editCode}>Edit</button>
        </div>
        <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2>Modal Content</h2>
          <p id="output">{displayOutput || "Code executed successfully with no output."}</p>
        </MyModal>
      </div>
    </div>
  );
};

export default SnippitSlider;
