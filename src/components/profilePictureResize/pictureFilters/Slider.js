import React from "react";

function Slider({ min, max, value, handleChange }) {
  return (
    <div className="sliderContainer">
      <input
        type="range"
        className="sliderContainer__slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Slider;
