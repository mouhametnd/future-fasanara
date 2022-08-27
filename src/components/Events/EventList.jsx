import React from 'react';
import styled from 'styled-components';
import { arrayEvents } from '../../constants/constants';
import EventItem from './EventItem';

const EventList = () => {
  return (
    <Wrapper className="app__section">
      <h2 className="app__section-title">Recent & Upcoming Events</h2>
      <p className="app__section-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam quia sit aut. Saepe?</p>

      <ContainerEvents>
        {arrayEvents.map((eventContent, index) => (
          <EventItem key={index} {...eventContent}></EventItem>
        ))}
      </ContainerEvents>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const ContainerEvents = styled.section`
  display: grid;
  gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));


  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default EventList;
