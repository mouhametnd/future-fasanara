import React, { useState } from 'react';
import styled from 'styled-components';
import angleRightSvg from '../../assets/svgs/angle-right-solid.svg';

const MobileNavElements = ({ clickHandler }) => {
  const [activatedLinkName, setActivatedLinkName] = useState(null);
  const handleNestedLiClick = linkName => setActivatedLinkName(linkName);

  const closeNav = e => {
    e.stopPropagation();
    setActivatedLinkName(null);
    clickHandler();
  };

  const shouldActive = linkName => {
    if (activatedLinkName === null) return;
    if (linkName === null) return 'is-active';
    if (linkName !== null && activatedLinkName === linkName) return 'is-active';
  };

  return (
    <Wrapper>
      <div className={`container-activated-element ${shouldActive(null)}`} onClick={() => handleNestedLiClick(null)}>
        <img src={angleRightSvg} alt="angle right" />
        <span className='nav-element'>{activatedLinkName}</span>
      </div>

      <ul className={`parrent__ul ${shouldActive(null)}`}>
        <li className={`parrent__li ${shouldActive('Funds')}`} onClick={() => handleNestedLiClick('Funds')}>
          <span>Funds</span>
          <img src={angleRightSvg} alt="angle right" />
          <ul className="nested__ul">
            <li onClick={e => closeNav(e)} className="nested__li">
              <a href="#" className='nav-element'>ESG</a>
            </li>
          </ul>
        </li>
        <li className={`parrent__li ${shouldActive('Insights')}`} onClick={() => handleNestedLiClick('Insights')}>
          <span>Info</span>

          <img src={angleRightSvg} alt="angle right" />
          <ul className="nested__ul">
            <li onClick={e => closeNav(e)} className="nested__li">
              <a href="#" className='nav-element'>Intelligence</a>
            </li>
            <li onClick={e => closeNav(e)} className="nested__li">
              <a href="#" className='nav-element'>VC Blog</a>
            </li>
          </ul>
        </li>
        <li onClick={e => closeNav(e)} className="parrent__li">
          <a href="#" className='nav-element'>Podcasts</a>
        </li>
        <li onClick={e => closeNav(e)} className="parrent__li">
          <a href="#" className='nav-element'>Media</a>
        </li>

        <li onClick={e => closeNav(e)} className="parrent__li">
          <a href="#" className='nav-element'>Seed</a>
        </li>

        <li className={`parrent__li ${shouldActive('Info')}`} onClick={() => handleNestedLiClick('Info')}>
          <span>Info</span>
          <img src={angleRightSvg} alt="angle right" />
          <ul className="nested__ul">
            <li onClick={e => closeNav(e)} className="nested__li">
              <a href="#" className='nav-element'>Teams</a>
            </li>
            <li onClick={e => closeNav(e)} className="nested__li">
              <a href="#" className='nav-element'>Timeline</a>
            </li>
            <li onClick={e => closeNav(e)} className="nested__li">
              <a href="#" className='nav-element'>Careers</a>
            </li>
            <li onClick={e => closeNav(e)} className="nested__li">
              <a href="#" className='nav-element'>Contact</a>
            </li>
          </ul>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  & ul {
    display: flex;
    flex-flow: column wrap;
    gap: 20px;
    border-radius: 10px;
  }

  & li {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
    cursor: pointer;

    &:not(&:last-of-type) {
      border-bottom: 1px solid #eee;
    }
  }



  & img {
    object-fit: contain;
    max-width: 20px;
    max-height: 20px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .parrent {
    &__ul {
      transition: transform 0.2s ease-in-out;
      &.is-active {
        transform: translateX(-100%);
      }
    }

    &__li.is-active {
      & ul {
        display: flex;
      }
    }
  }

  .nested {
    &__ul {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0px;
      display: none;
      transform: translateX(100%);
    }
    &__li {
    }
  }

  .li-active .is-active {
    display: flex;
  }

  .container-activated-element {
    display: none;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.1s ease-in-out;
    padding-bottom: 10px;
    padding-left: 10px;

    &.is-active {
      display: flex;
    }


    & span {
      border-bottom: 2px solid var(--black);
      margin-left: 5px;
    }
    & img {
      width: 15px;
      height: 15px;
      transform: rotate(180deg);
    }
  }

  @media screen and (hover: hover) {
    & li:hover,
    & .container-activated-element:hover {
      opacity: 0.6;
    }
  }
`;

export default MobileNavElements;
