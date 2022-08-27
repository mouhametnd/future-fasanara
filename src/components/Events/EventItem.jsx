import React from 'react';
import styled from 'styled-components';

const EventItem = ({ title, description, image, date }) => {
  return (
    <Wrapper>
      <div className="container-img">
        <img src={image} alt="tech image" />
      </div>

      <div className="container-content">
        <p className="app__normal-text">{description}</p>
        <h4>{title}</h4>
        <span>{date}</span>
      </div>
      <span className="span-effects"></span>
      <span className="span-effects"></span>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  min-height: 320px;
  width: 100%;
  max-width: 400px;
  margin-inline: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--customShadow);
  cursor: pointer;

  & img {
    position: absolute;
    z-index: -1;
  }

  & span {
    width: max-content;
    padding: 10px 20px;
    border: 1px solid var(--white);
  }

  & h4,
  & span {
    color: var(--white);
  }

  & h4 {
    line-height: 165%;
  }

  .container {
    &-img {
      height: 100%;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--black);
        opacity: 0.5;
      }
    }

    &-content {
      position: absolute;
      left: 40px;
      bottom: 50px;
      display: flex;
      flex-flow: column nowrap;
      gap: 10px;
      padding-right: 35px;
    }
  }

  .span-effects {
    display: none;
  }

  @media screen and (hover: hover) {
    & .app__normal-text {
      opacity: 0;
    }

    & p {
      transition: opacity 0.3s ease-in-out;
    }
    & img{
      transition: transform 0.3s ease-in-out;

    }

   

    &::before,
    &::after,
    & .span-effects {
      padding: 0px;
      display: block;
      position: absolute;
      content: '';
      background-color: var(--white);
      border-radius: 10px;
      z-index: 9;
      transition: clip-path 0.3s ease-in-out;
    }

    &::before {
      top: 0;
      left: 25px;
      width: 2.5px;
      height: calc(100% - 50px);
      clip-path: inset(0 0 100% 0);
    }
    &::after {
      bottom: 30px;
      left: 0px;
      width: calc(80px);
      height: 2.5px;
      clip-path: inset(0 100% 0 0);
    }

    & .span-effects:nth-of-type(1) {
      right: 0;
      top: 55.5%;
      width: calc(100% - 60px);
      height: 2.5px;
      clip-path: inset(0 0 0 100%   );
      
    }
    & .span-effects:nth-of-type(2) {
      left: 52%;
      bottom: 0px;
      height: 90px;
      width: 2.5px;
      clip-path: inset(100% 0 0 0);
    }

    &:hover {
      & .app__normal-text {
        opacity: 1;
      }
      &::before,
      &::after,
      & .span-effects {
        clip-path: inset(0 0 0 0);
      }

      & img {
        transform: scale(1.04);
      }
    }
  }
`;

export default EventItem;
