import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const NumberInputWithPrefix = ({ value, changeVal, content }) => {
  return (
    <div className="numberInputWithPrefix">
      {content && <p>{content}</p>}
      <input type="number" value={value} onChange={e => changeVal(e)} />
    </div>
  );
};

NumberInputWithPrefix.propTypes = {
  value: PropTypes.number.isRequired,
  changeVal: PropTypes.func.isRequired,
  content: PropTypes.string
};

export default NumberInputWithPrefix;
