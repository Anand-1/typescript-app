import React from "react";

type Props = {
  explanation: string;
};

const Explanation: React.FC<Props> = ({ explanation }) => {
  return (
    <div className="explanation">
      <h3>Explanation</h3>
      <pre><p>{explanation}</p></pre>
    </div>
  );
};
export default Explanation;