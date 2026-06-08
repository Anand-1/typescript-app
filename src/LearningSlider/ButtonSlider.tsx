const ButtonSlider = ({ handlePrevious, handleNext }: { handlePrevious?: () => void; handleNext?: () => void }) => {
  return (
    <div className="button-slider">
      {handlePrevious && <button onClick={handlePrevious}>Previous</button>}
      {handleNext && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default ButtonSlider;