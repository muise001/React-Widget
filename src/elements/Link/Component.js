import React from 'react';
import PropTypes from "prop-types"
import styled from "styled-components"

const Link = ({label, link, primaryButton, setOpen}) => {
  console.log(setOpen);
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
  `
  return (
    <CustomLink className={primaryButton && "primaryButton"} onClick={() => {setOpen(true)}} href={link}>{label}</CustomLink>
  );
}

Link.defaultProps = {
  setOpen: a => a
}

Link.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  primaryButton : PropTypes.bool
};

export default Link;
