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
    <div className="learning-slider">
      <h2>Learning Slider</h2>
      <p>This is a simple learning slider component.</p>
      <hr />
      <SnippitSlider data={dataIndex} />
      <div className="button-slider-container">
        {/* Command prop pattern: parent owns navigation state; buttons receive only the action they trigger. */}
        <ButtonSlider handlePrevious={handlePrevious}  />
        <ButtonSlider handleNext={handleNext} />
      </div>
      <Explanation explanation={dataIndex.explanation ?? ""} />
    </div>
  );
};

export default LearningSlider;
