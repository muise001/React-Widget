import React from "react";
import PropTypes from "prop-types";
import NumberInputWithPrefix from "../inputs/NumberInputWithPrefix";
import RangeSlider from "../inputs/RangeSlider";
import "./style.css";

const Slider = ({
  label,
  min,
  max,
  withDropdown,
  valutaIcon,
  value,
  setValue,
  step
}) => {
  const changeVal = ({ target: { value } }) => {
    if (value > max) {
      return;
    }
    setValue(value);
  };

  return (
    <div className="sliderContainer">
      <label>{label}</label>
      <NumberInputWithPrefix
        value={value}
        changeVal={changeVal}
        content={valutaIcon}
      />
      <RangeSlider
        value={value}
        changeVal={changeVal}
        step={step}
        min={min}
        max={max}
      />
    </div>
  );
};

Slider.defaultProps = {
  min: 0
};

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  withDropdown: PropTypes.bool,
  valutaIcon: PropTypes.string,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func,
  step: PropTypes.number
};

export default Slider;

// -=========- DESCRIPTION -=========- //
// line 15. I tried changing the range slider to a styled component, but it worked very
//          buggy as soon i gave it any styling.
// line 19. After that, i tried styling the parent div.
//          This gave me the same bug :(
