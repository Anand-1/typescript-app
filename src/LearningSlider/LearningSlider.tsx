import React from "react";
import "./LearningSlider.css";
import ButtonSlider from "./ButtonSlider";
import data from "./LearningsData";
import SnippitSlider from "./SnippetSlider";
import Explanation from "./Explanation";

const LearningSlider = () => {
  // Current item state pattern: the selected learning object drives snippet and explanation displays.
  const [dataIndex, setDataIndex] = React.useState(data[0]);
  const handleNext = () => {
    // Guarded navigation pattern: do not move beyond the end of the data array.
    if (dataIndex.id < data.length - 1) {       
      setDataIndex(data[dataIndex.id + 1]);
    }
  };
  const handlePrevious = () => {
    // Guarded navigation pattern: do not move before the first data item.
    if (dataIndex.id > 0) {
      setDataIndex(data[dataIndex.id - 1]);
    }
  };    
  return (
    <section className="learning-slider example-page">
      <header className="example-header">
        <h1>Learning Slider Example</h1>
        <p>
          Step through code snippets, run them in the browser, copy them, and
          reveal explanations for each learning item.
        </p>
        <div className="example-links">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop" target="_blank" rel="noreferrer">
            Open Event Loop Docs
          </a>
        </div>
      </header>

      <section className="example-panel">
        <SnippitSlider data={dataIndex} />
        <div className="button-slider-container">
          {/* Command prop pattern: parent owns navigation state; buttons receive only the action they trigger. */}
          <ButtonSlider handlePrevious={handlePrevious}  />
          <ButtonSlider handleNext={handleNext} />
        </div>
        <Explanation explanation={dataIndex.explanation ?? ""} />
      </section>
    </section>
  );
};

export default LearningSlider;
