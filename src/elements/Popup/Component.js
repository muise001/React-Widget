import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MakeItRain from "../containers/MakeItRain";

const Popup = ({ children, isOpen, setOpen }) => {
  const PopupContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50vh;
    height: 50vh;
    padding: 1rem 1.5rem 2.5rem;
    background: white;
    margin: -25vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 1;
    a {
      text-align: center;
    }
  `;

  return (
    <MakeItRain isOpen={isOpen} setOpen={setOpen}>
      <PopupContainer>{children}</PopupContainer>
    </MakeItRain>
  );
};

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Popup;
