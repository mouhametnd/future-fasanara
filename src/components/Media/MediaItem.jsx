import React from 'react';
import styled from 'styled-components';

const MediaItem = ({ image, title, description, date }) => {
  return (
    <Wrapper>
      <div className="container-img">
        <img loading='lazy' src={image} alt={title} />
      </div>
      <div className="container-text">
        <h3>{title}</h3>
        <span>{date}</span>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  max-width: 370px;
  min-height: 480px;
  margin-inline: auto;
  background-color: var(--white);
  box-shadow: var(--customShadow);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  & h3 {
    font-size: 1.3rem;
  }

  & span {
    font-weight: 500;
    color: var(--darkGray);
  }

  & p {
    margin: 0px;
    font-size: 1rem;
    line-height: 155%;
    font-weight: 300;
  }

  .container {
    &-text {
      position: relative;
      z-index: 2;
      padding: 30px 30px;
      display: flex;
      flex-flow: column;
      gap: 15px;
    }
    &-img {
      position: relative;
      z-index: 2;
      max-height: 300px;
    }
  }

  @media screen and (min-width: 1500px) {
    display: flex;
    justify-content: space-between;
    height: max-content;
    max-width: 700px;
    min-height: 300px;
    max-height: 300px;

    & .container {
      &-text {
        max-width: 250px;
        padding-right: 0px;
        padding-top: 70px;

        & p {
          font-size: 0.9rem;
        }
      }
      &-img {
        max-width: 450px;
        display: inline-block;
        clip-path: polygon(20% 0, 100% 0%, 100% 100%, 8% 100%);
        order: 1;

        & img {
          transition: 0.3s ease-out transform;
        }
      }
    }
    @media screen and (hover: hover) {
      &:hover {
        & img {
          transform: scale(1.1) rotate(2deg);
        }
      }
    }
  }
`;

export default MediaItem;
