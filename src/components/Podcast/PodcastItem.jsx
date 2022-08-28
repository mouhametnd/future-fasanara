import React from 'react';
import styled from 'styled-components';
import linkSvg from '../../assets/svgs/link-solid.svg';

const PodcastItem = ({ image, title, description, link }) => {
  return (
    <Wrapper>
      <a href={link}>
        <img loading="lazy" src={linkSvg} alt={title} />
      </a>
      <div className="container-bg-image app__darker-img">
        <img loading="lazy" src={image} alt={title} />
      </div>

      <div className="container-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  margin-inline: auto;
  @media screen and (max-width: 680px) {
    max-width: 400px;
    margin-inline: auto;
  }

  & a {
    position: absolute;
    z-index: 2;
    top: 49px;
    left: 10%;
    border: 2px solid var(--white);
    padding: 10px 13px;
    border-radius: 50%;

    &::before {
      content: '';
      position: absolute;
      z-index: 2;
      top: -50px;
      left: 50%;
      width: 2px;
      height: 50px;
      background-color: var(--white);
    }

    & img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }

  .container {
    &-bg-image {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;

      &::before {
      }
    }

    &-text {
      position: absolute;
      bottom: 40px;
      left: 5%;
      padding-right: 20px;
      z-index: 2;
      & * {
        color: var(--white);
      }

      & h3 {
        font-size: clamp(1.1rem, 2vw, 1.3rem);
        font-weight: 700;
      }
      & p {
        font-size: 1rem;
        font-weight: 300;
        line-height: 145%;
      }
    }
  }

  @media screen and (hover: hover) {
    cursor: pointer;
    overflow: hidden;
    & a {
      transform: translateY(-130px);
    }

    & .container-text {
      transform: translateY(200px);
    }

    & a,
    & .container-text {
      transition: transform 0.4s linear;
    }

    &:hover {
      & a,
      & .container-text {
        transform: translateY(0);
      }
    }
  }
`;

export default PodcastItem;
