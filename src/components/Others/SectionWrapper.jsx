import React from 'react';
import styled from 'styled-components';

const SectionWrapper = ({ title, description, children, extraStyles }) => {
  return (
    <Wrapper className="app__section" extraStyles={extraStyles}>
      <h2 className="app__section-title">{title}</h2>
      <p className="app__section-subtitle">{description}</p>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${({ extraStyles }) => extraStyles}
`;
export default SectionWrapper;
