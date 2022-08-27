import styled from 'styled-components';
import logo from '../../assets/imgs/logo.webp';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <Wrapper>
      <div className="container-top">
        <img src={logo} alt="logo" />
        <MobileNav></MobileNav>
      </div>
      <DesktopNav></DesktopNav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  background-color: var(--white);
  .container-top {
    display: flex;
    justify-content: space-between;
    padding-inline: 15px;
    padding-block: 10px;
  }

  & img {
    width: 80px;
    height: 80px;
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
