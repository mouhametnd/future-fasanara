import React from 'react';
import styled from 'styled-components';
import { arrayMedia } from '../../constants/constants';
import MediaItem from './MediaItem';

const MediaList = () => {
  return (
    <section className="app__section">
      <h2 className="app__section-title">Media Lorem ipsum dolor sit.</h2>
      <p className="app__section-subtitle">
        Fasanara Capital is an independent, owner-managed alternative asset management company authorized and regulated
        by the Financial Conduct Authority.
      </p>
      <Wrapper>
        {arrayMedia.map((media, index) => (
          <MediaItem key={index} {...media}></MediaItem>
        ))}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 40px;
  @media screen and (min-width: 548px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media screen and (min-width: 1500px) {
    display: block;
    position: relative;
    min-height: 500px;

    & article {
      position: absolute;
      &:nth-child(1) {
        top: 3.125em;
        left: -30px;
      }
      &:nth-child(1) {
        top: 0;
        left: -30px;
      }

      &:nth-child(2) {
        top: 5.625em;
        left: calc(100% / 3 - 5px);
        top: 330px;
        left: 360px;
      }

      &:nth-child(3) {
        top: 0;
        right: -30px;
      }
    }
  }
`;
export default MediaList;