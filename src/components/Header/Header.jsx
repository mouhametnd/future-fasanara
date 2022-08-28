import styled from 'styled-components';
import logo from '../../assets/imgs/logo.webp';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <Wrapper>
      <div className="container-top">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <MobileNav></MobileNav>
      </div>
      <DesktopNav></DesktopNav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0%;
  z-index: 10;
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;

  background-color: var(--white);
  .container-top {
    display: flex;
    justify-content: space-between;
    padding-inline: 15px;
    padding-block: 10px;
  }

  & img {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--customShadow);
    padding-inline: 40px;
  }
`;

export default Header;
