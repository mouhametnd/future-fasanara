import React from 'react';
import styled from 'styled-components';
import { arrayCapitals } from '../../constants/constants';
import SectionWrapper from '../Others/SectionWrapper';
import CapitalItem from './CapitalItem';

const CapitalList = () => {
  return (
    <SectionWrapper
      title="Fasanara Capital"
      description="Fasanara Capital is an independent, owner-managed alternative asset management company authorized and regulated
      by the Financial Conduct Authority"
    >
      <Wrapper>
        {arrayCapitals.map((capital, index) => (
          <CapitalItem {...capital} key={index}></CapitalItem>
        ))}
      </Wrapper>
    </SectionWrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1524px) {
    position: relative;
    min-height: 700px;

    & article {
      position: absolute;
      max-width: 450px;

      &:nth-child(1) {
        top: 0;
        left: 33.9%;
      }

      &:nth-child(2) {
        left: 0%;
        top: 30%;
      }

      &:nth-child(3) {
        top: 30%;
        right: 0%;
      }

      &:nth-child(4) {
        bottom: 0;
        left: 33.9%;
      }
    }
  }
`;

export default CapitalList;
