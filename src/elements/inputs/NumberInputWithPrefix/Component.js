import React from "react";

const NumberInputWithPrefix = ({value, changeVal, content}) => {
  return (
    <div className="numberInputWithPrefix">
      {content && <p>{content}</p>}
      <input type="number" value={value} onChange={changeVal} />
    </div>
  )
}

export default NumberInputWithPrefix
