import React from "react";

type Props = {
  explanation: string;
};

const Explanation: React.FC<Props> = ({ explanation }) => {
  const [showExplanation, setShowExplanation] = React.useState<boolean>(false);
  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  const copyExplanation = () => {
    navigator.clipboard.writeText(explanation).catch(() => {
      /* ignore clipboard errors */
    });
  };
  const editExplanation = () => {
    const updated = window.prompt("Edit explanation:", explanation);
    if (updated !== null) {
      // In a real app, you'd want to update the state here
      alert("Updated explanation: " + updated);
    }
  };
  return (
    <div className="explanation">
      <h3>Explanation</h3>
      <div className="explanation-buttons">
        <button onClick={copyExplanation}>Copy Explanation</button>
        <button onClick={editExplanation}>Edit Explanation</button>
        <button onClick={toggleExplanation}>Show Explanation</button>
      </div>
      {showExplanation && (
        <pre className="explanation-content">
          <p>{explanation}</p>
        </pre>
      )}
    </div>
  );
};
export default Explanation;
