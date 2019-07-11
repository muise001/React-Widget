import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const RangeSlider = ({ changeVal, value, min, max, step }) => {
  return (
    <div>
      <input
        onChange={e => changeVal(e)}
        value={value}
        type="range"
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};

RangeSlider.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  changeVal: PropTypes.func.isRequired,
  step: PropTypes.number
};

export default RangeSlider;
