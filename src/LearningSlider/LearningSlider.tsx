import React from "react";
import "./LearningSlider.css";
import ButtonSlider from "./ButtonSlider";
import data from "./LearningsData";
import SnippitSlider from "./SnippetSlider";
import Explanation from "./Explanation";
import GoogleSearchButton from "../Features/SearchOnGoogle";

const LearningSlider = () => {
  const [dataIndex, setDataIndex] = React.useState(data[0]);
  const handleNext = () => {
    if (dataIndex.id < data.length - 1) {       
      setDataIndex(data[dataIndex.id + 1]);
    }
  };
  const handlePrevious = () => {
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
        {/* Cast props to any to satisfy TS when ButtonSlider has no typed props */}
        <ButtonSlider handlePrevious={handlePrevious}  />
        <GoogleSearchButton />
        <ButtonSlider handleNext={handleNext} />
      </div>
      <Explanation explanation={dataIndex.explanation ?? ""} />
    </div>
  );
};

export default LearningSlider;

