import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Link = ({ label, link, primaryButton, setOpen }) => {
  const [error, showError] = useState(false);
  const CustomLink = styled.a`
    text-decoration: underline;
    color: rgb(0, 168, 120);
    &.primaryButton {
      padding: 15px 30px;
      background: #9e9eef;
      color: white;
      border-radius: 50px;
      text-decoration: none;
    }
  `;

  const ErrorMessage = styled.p`
    display: none;
    &::before {
      content: " ";
      width: 10px;
      height: 10px;
      background: white;
      border: 1px solid rgb(224, 74, 74);
      position: absolute;
      transform: rotate(45deg);
      top: -6px;
      left: 0;
      right: 0;
      margin: auto;
      border-bottom: none;
      border-right: none;
    }
    &.show {
      color: black;
      display: block;
      position: absolute;
      border: rgb(224, 74, 74) solid 1px;
      border-radius: 1000px;
      top: 3rem;
      padding: 1rem;
      right: -34px;
      background: white;
      box-shadow: 0px 11px 73px -12px #a0a0a0;
    }
  `;

  const handleClick = () => {
    const state = setOpen();
    state ? showError(false) : showError(true);
  };

  return (
    <>
      <CustomLink
        className={primaryButton && "primaryButton"}
        onClick={() => {
          setOpen && handleClick();
        }}
        href={link}
      >
        {label}
      </CustomLink>
      <ErrorMessage className={`${error && "show"}`}>
        Nog niet alle velden zijn ingevuld
      </ErrorMessage>
    </>
  );
};

Link.defaultProps = {
  setOpen: a => a
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  primaryButton: PropTypes.bool,
  setOpen: PropTypes.func
};

export default Link;
