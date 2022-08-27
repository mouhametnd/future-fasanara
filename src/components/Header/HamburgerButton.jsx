import React from 'react';
import styled from 'styled-components';
import '../../global-styles/hamburger.css';

const HamburgerButton = ({ clickHandler, isOpen }) => {
  return (
    <Button
      onClick={() => clickHandler()}
      className={`hamburger hamburger--emphatic ${isOpen && 'is-active'}`}
      type="button"
    >
      <span className="hamburger-box hamburger__span">
        <span className="hamburger-inner hamburger__span"></span>
      </span>
    </Button>
  );
};

const Button = styled.button`
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  transition: 0.2s linear opacity;
  cursor: pointer;
  @media screen and (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }
  & * {
    pointer-events: none;
  }
  .hamburger {
    &-inner {
      background-color: var(--black);
      &::after,
      &::before {
        background-color: var(--black);
      }
    }
  }
`;

export default HamburgerButton;
