import React from "react"

const RangeSlider = ({changeVal, value, min, max}) => {
  return (
    <div>
      <input onChange={changeVal} value={value} type="range" min={min} max={max}/>
    </div>
  )
}

export default RangeSlider
