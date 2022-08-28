import React from 'react';
import styled from 'styled-components';
import { arrayPodcasts } from '../../constants/constants';
import SectionWrapper from '../Others/SectionWrapper';
import PodcastItem from './PodcastItem';

const PodcastList = () => {
  return (
    <SectionWrapper
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consectetur excepturi praesentium magnam quam."
      title="The Future of Fintech Podcast"
      extraStyles="background-image: linear-gradient(var(--white) 0% 15%, var(--black) 15% 100%); padding-bottom: 80px; @media screen and (min-width: 680px) {background-image: linear-gradient(var(--bodyBg) 0% 26%, var(--black) 26% 100%);}}"
    >
      <PodcastWrapper>
        {arrayPodcasts.map((podcast, index) => (
          <PodcastItem key={index} {...podcast}></PodcastItem>
        ))}
      </PodcastWrapper>
    </SectionWrapper>
  );
};

const PodcastWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  @media screen and (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 800px) {
    max-width: 1050px;
    gap: 0px;
    justify-items: center;
    align-items: center;
    margin-inline: auto;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 450px 150px 350px 150px 450px;
    grid-template-areas:
      'card-1 card-2'
      'card-3 card-2'
      'card-3 card-4'
      'card-5 card-4'
      'card-5 card-6';

    & article {
      &:nth-child(1) {
        grid-area: card-1;
      }
      &:nth-child(2) {
        grid-area: card-2;
      }
      &:nth-child(3) {
        grid-area: card-3;
      }
      &:nth-child(4) {
        grid-area: card-4;
      }
      &:nth-child(5) {
        grid-area: card-5;
      }
      &:nth-child(6) {
        grid-area: card-6;
      }
    }
  }
`;

export default PodcastList;
