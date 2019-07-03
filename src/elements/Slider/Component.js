import React, {useState} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import NumberInputWithPrefix from "../inputs/NumberInputWithPrefix"
import RangeSlider from "../inputs/RangeSlider"

const Dropdown = ({label, min, max, withDropdown, valutaIcon}) => {
  const [value, setValue] = useState(max)

const changeVal = ({target: {value}}) => {
  if (value > max){
    return
  }
  setValue(value)
}

// const RangeSlider = styled.input`
//  width: 100%;
// }`

// const SliderContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `

  return (
    <div className="sliderContainer">
      <label>{label}</label>
        <NumberInputWithPrefix value={value} changeVal={changeVal} content={valutaIcon}/>
        <RangeSlider value={value} changeVal={changeVal} min={min} max={max}/>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,

};

export default Dropdown;

// -=========- DESCRIPTION -=========- //
// line 15. I tried changing the range slider to a styled component, but it worked very
//          buggy as soon i gave it any styling.
// line 19. After that, i tried styling the parent div.
//          This gave me the same bug :(
