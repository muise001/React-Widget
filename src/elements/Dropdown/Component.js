import React, { useState } from 'react';
import PropTypes from "prop-types"
import { useCloseOnOutsideClick } from "../../hooks";
import { DropdownArrow } from "../Icons"

const Dropdown = ({label, options, placeholder, setValue, value}) => {
  const [open, setOpen] = useState(false);

  let dropdownOptions = options.map(option => (
    <p onClick={() => {setValue(option)}}>{option}</p>
  ))

  useCloseOnOutsideClick(label, setOpen)

  return (
    <div className="dropdown">
      <label>{label}</label>
      <div id={label} onClick={() => {setOpen(!open)}}>
        <div className={`dropdownLabel ${open && "open"} ${value && "checked"}`}>
          <p>{value ? value : placeholder}</p>
          <DropdownArrow />
        </div>
         <div className={`optionsContainer`}>
          {dropdownOptions}
        </div>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string
};

export default Dropdown;

// -=========- DESCRIPTION -=========- //
// line 17. Used prop.label as id. This is not safe because there is a posibility
//          you have two different dropdowns with the same (or even without) a label.
//          I tried changing the id with "uuid". This didn't work because the
//          component re-renders frequently and keeps generating new id's.
//          I could've given an id from the parent, but then I would have to import "uuid"
//          at the parent and only use it to give an id to it's children. Also you
//          shouldn't write "logics" in an component that's not the component you're using
//          the written logic at. So this was the best solution for now.
