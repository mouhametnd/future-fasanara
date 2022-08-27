import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerButton from './HamburgerButton';
import NavElements from './NavElements';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNav = () => setIsOpen(prev => !prev);
  const closeNav = () => setIsOpen(false);

  return (
    <Wrapper>
      <HamburgerButton clickHandler={toggleNav} isOpen={isOpen}></HamburgerButton>

      <Aside isOpen={isOpen} >
        <NavElements clickHandler={closeNav}></NavElements>
      </Aside>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: block;
  align-self: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Aside = styled.aside`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: max-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding-top: 20px;
  transition: clip-path 0.4s ease-in-out;
  clip-path: circle(0% at 0% 0%);
  background-color: var(--white);
  clip-path: ${({ isOpen }) => isOpen && 'circle(150% at 0% 0%)'};


`;

const NavBarWrapper = styled.div`
  height: 43%;
  text-align: center;
  display: flex;
  & ul {
    margin-inline: auto;
    width: max-content;
  }
  & a {
    font-size: 17.6px;
  }
`;

export default MobileNav;
