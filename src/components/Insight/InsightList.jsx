import React from 'react';
import styled from 'styled-components';
import { arrayInsights } from '../../constants/constants';
import InsightItem from './InsightItem';

const InsightList = () => {
  return (
    <section className="app__section">
      <h2 className="app__section-title">Insights from the team</h2>
      <p className="app__section-subtitle">
        Fasanara Capital is an independent, owner-managed alternative asset management company authorized and regulated
        by the Financial Conduct Authority.
      </p>

      <Wrapper>
        {arrayInsights.map((insight, index) => (
          <InsightItem key={index} {...insight}></InsightItem>
        ))}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 40px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default InsightList;
