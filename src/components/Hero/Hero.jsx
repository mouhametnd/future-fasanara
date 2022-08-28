import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { carouselItems } from '../../constants/constants';

const Hero = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const elementRef = useRef();
  const handleDotClick = num => {
    const { clientWidth } = elementRef.current;
    const { scrollLeft } = elementRef.current;
    const scrollNum = clientWidth * num;
    if (Math.floor(scrollLeft) === Math.floor(scrollNum)) return;
    setCurrentItem(num);

    elementRef.current.scrollBy({
      left: scrollNum - scrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper>
      <section className="container-carousel" ref={elementRef}>
        {carouselItems.map(({ buttonContent, description, image, title }, index) => (
          <article key={index}>
            <img src={image} alt="hero" />
            <div className="container-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <button className="app__button--base app__button--hover">{buttonContent}</button>
            </div>
          </article>
        ))}
      </section>

      <div className="container-dots">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`${currentItem === index && 'is-active'}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  padding: 0px;

  .container {
    &-carousel {
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-columns: repeat(4, 100%);
      overflow: scroll;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
      scroll-snap-type: x mandatory;

    }

    &-dots {
      position: absolute;
      bottom: 50px;
      width: 100%;
      min-width: 100%;
      height: 20px;
      display: flex;
      justify-content: center;
      gap: 20px;

      & div {
        padding: 0px;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0px 0px 0px 1px var(--white) inset;
        transition: opacity 0.1s ease-in-out;

        @media screen and (hover: hover) {
          &:hover {
            opacity: 0.6;
          }
        }
      }

      & .is-active {
        background-color: var(--white);
      }
    }

    &-content {
      max-width: 600px;
      padding-top: 40px;
      padding-inline: 15px;
      display: flex;
      flex-flow: column;
      gap: 10px;
      @media screen and (min-width: 768px) {
        padding-inline: 60px;
      }
    }
  }

  & article {
    position: relative;
    height: 100%;
    min-height: 430px;
    color: var(--white);
    left: 0px;
    min-width: 100%;
    scroll-snap-align: start;

    & * {
      color: inherit;
    }
    @media screen and (min-width: 768px) {
      min-height: 500px;
    }
  }

  & h3 {
    padding-top: 40px;
    font-size: clamp(1.5rem, 5vw, 2rem);
  }

  & p {
    font-size: clamp(0.7rem, 5vw, 1rem);
    line-height: 170%;
  }

  & img {
    position: absolute;
    z-index: -1;
  }

 
`;

export default Hero;
