import React from "react";
import styled from "styled-components";
import "./style.css";

const MakeItRain = ({ children, isOpen, setOpen }) => {
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
  `;

  const generatedMoney = [];

  for (var i = 0; i < 30; i++) {
    const ms = Math.floor(Math.random() * Math.floor(3000));
    const left = Math.floor(Math.random() * Math.floor(window.innerWidth));
    generatedMoney.push(
      <div
        key={i}
        className="twirl"
        style={{
          animationDelay: `${ms}ms`,
          transform: "translateY(-10rem)",
          left: left - 100
        }}
      >
        <div className="bill">10</div>
      </div>
    );
  }

  return (
    <BlurredBackground
      onClick={() => {
        setOpen(false);
      }}
      className={isOpen && "open"}
    >
      {children}
      <div className="rain">{generatedMoney}</div>
    </BlurredBackground>
  );
};

export default MakeItRain;
