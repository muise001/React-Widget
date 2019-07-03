import React, { useState } from "react"
import styled from "styled-components"

const Popup = ({children, isOpen, setOpen}) => {
  console.log(isOpen);
  const BlurredBackground = styled.div`
    opacity: 0;
    pointer-events: none;
    &.open {
      pointer-events: all;
      opacity: 1;
      position: absolute;
      background: rgba(119, 158, 180, 0.73);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `

  const PopupContainer = styled.div`
    width: 10%;
    height: 10%;
    background: blue;
  `

  return (
    <BlurredBackground className={isOpen && "open"} onClick={() => {setOpen(false)}}>
      <PopupContainer>
        {children}
      </PopupContainer>
    </BlurredBackground>
  )
}

export default Popup
