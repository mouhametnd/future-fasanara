import React from 'react';
import styled from 'styled-components';

const CapitalItem = ({ title, description, image }) => {
  return (
    <Wrapper>
      <div className="container-img app__darker-img">
        <img src={image} loading="lazy" alt={title} />
      </div>
      <div className="container-title">
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  max-width: 500px;
  min-height: 300px;
  margin-inline: auto;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  cursor: pointer;

  & img {
    position: absolute;
    transition: transform 0.3s ease;
  }

  @media screen and (hover: hover) {
    &:hover {
      & img {
        transform: scale(1.25);
      }
    }
  }

  .container {
    &-title {
      position: absolute;
      z-index: 3;
      top: 15px;
      left: 15px;
      width: 100%;
      height: 100%;
      max-width: calc(100% - 100px);
      max-height: calc(100% - 40px);
      background-color: var(--white);
      mix-blend-mode: lighten;
      isolation: isolate;
      padding-inline: 20px;
    }

    &-img {
      height: 100%;
      padding-right: 20px;
      &::before {
        z-index: 1;
        opacity: 0.4;
      }
    }
  }

  & h3 {
    padding-top: 15px;
    color: #000;
    text-align: center;
    font-size: clamp(2.5rem, 3.5vw, 3.5rem);
  }

  & p {
    position: absolute;
    z-index: 4;
    top: 150px;
    left: 40px;
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--black);
    max-width: calc(100% - 120px);
    line-height: 150%;
  }
`;

export default CapitalItem;
