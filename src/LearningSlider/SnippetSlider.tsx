import React from "react";
import MyModal from "../Features/Portals";
const SnippitSlider = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
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
              let log = console.log;
              log = function (...args) {
                let data = log.bind(console, args);
                alert(data);
                const outputElem = document.getElementById("output");
                if (outputElem) {
                  outputElem.textContent += data + "\n";
                }
              };
              setIsOpen(true);
            } catch (error) {
              console.error("Error executing code:", error);
            }
          }}
        >
          Run
        </button>
        <button onClick={editCode}>Edit</button>
        <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p id="output">This content is rendered outside the App component!</p>
      </MyModal>
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