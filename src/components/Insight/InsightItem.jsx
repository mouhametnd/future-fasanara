import React from 'react';
import styled from 'styled-components';

const InsightItem = ({ image, title, description }) => {
  return (
    <Wrapper>
      <img src={image} alt={title} loading="lazy" />
      <div className="container-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: var(--white);
  box-shadow: var(--customShadow);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  min-height: 520px;
  max-width: 370px;
  margin-inline: auto;
  position: relative;

  @media screen and (hover: hover) {
    &:hover {
      &::before {
        clip-path: circle(80% at 50% 50%);
      }

      & .container-content {
        color: var(--white);
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black);
    clip-path: circle(0% at 50% 0%);
    transition: clip-path 0.55s ease;
  }

  & img {
    position: relative;
    z-index: 2;
    max-height: 300px;
  }

  .container {
    &-content {
      position: relative;
      z-index: 2;
      padding: 50px 30px;

      & * {
        color: inherit;
        transition: color 0.4s ease;
      }
    }
  }

  & h3 {
    font-size: 1.3rem;
  }
  & p {
    font-size: 1rem;
    line-height: 155%;
    font-weight: 300;
  }
`;

export default InsightItem;
