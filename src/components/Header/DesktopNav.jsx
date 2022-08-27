import React from 'react';
import styled from 'styled-components';

const DesktopNav = () => {
  return (
    <Wrapper>
      <ul className="parrent__ul">
        <li className="parrent__li">
          <a className="app__nav-element" href="#">
            Funds
          </a>
          <ul className="nested__ul">
            <li className="nested__li">
              <a className="app__nav-element" href="#">
                ESG
              </a>
            </li>
          </ul>
        </li>
        <li className="parrent__li">
          <a className="app__nav-element" href="#">
            Insights
          </a>
          <ul className="nested__ul">
            <li className="nested__li">
              <a className="app__nav-element" href="#">
                Intelligence
              </a>
            </li>
            <li className="nested__li">
              <a className="app__nav-element" href="#">
                VC Blog
              </a>
            </li>
          </ul>
        </li>
        <li className="parrent__li">
          <a className="app__nav-element" href="#">
            Podcasts
          </a>
        </li>
        <li className="parrent__li">
          <a className="app__nav-element" href="#">
            Media
          </a>
        </li>

        <li className="parrent__li">
          <a className="app__nav-element" href="#">
            Seed
          </a>
        </li>

        <li className="parrent__li">
          <a className="app__nav-element" href="#">
            Info
          </a>
          <ul className="nested__ul">
            <li className="nested__li">
              <a className="app__nav-element" href="#">
                Teams
              </a>
            </li>
            <li className="nested__li">
              <a className="app__nav-element" href="#">
                Timeline
              </a>
            </li>
            <li className="nested__li">
              <a className="app__nav-element" href="#">
                Careers
              </a>
            </li>
            <li className="nested__li">
              <a className="app__nav-element" href="#">
                Contact
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    padding-right: 100px;
    & li{
      padding: 5px 10px;
    }

    .parrent {
      &__ul {
        display: flex;
        gap: 20px;
        padding-right: 30px;
      }

      &__li {
        position: relative;
        &:hover {
          .nested__ul {
            opacity: 1;
            pointer-events: all;
          }
        }
      }
    }

    .nested {
      &__ul {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease-in-out;
        display: flex;
        position: absolute;
        top: 100%;
        left: 0px;
        flex-flow: column;
        gap: 5px;
        padding: 5px 10px;
        background-color: var(--white);
        cursor: pointer;
        border-radius: 10px;
        box-shadow: var(--customShadow);

        & li {
          position: relative;
          padding-inline: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          &:not(&:last-of-type) {
            border-bottom: 1px solid #eee;
          }

          &::before {
            content: '';
            position: absolute;
            width: 20px;
            height: 1.7px;
            background-color: var(--black);
            top: 50%;
            left: -10px;
            border-radius: 10px;
            clip-path: inset(0 100% 0 0);
            transition: clip-path 0.2s ease-in-out;
          }

          @media screen and (hover: hover) {
            &:hover::before {
              clip-path: inset(0 0 0 0);
            }
          }
        }
      }
    }
  }
`;

export default DesktopNav;
