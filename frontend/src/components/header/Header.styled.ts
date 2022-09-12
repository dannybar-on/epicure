import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 45px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;

  & div {
    display: flex;
    position: relative;
    &.logo {
      position: absolute;
      left: 45%;
    }
    & img {
      width: 32px;
      height: 32px;
      &.nav-icon {
        width: 20px;
        height: 20px;
        margin: 5px;
      }
    }
  }
  .main-nav {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    .hamburger {
      display: none;
    }
    div.logo {
      left: 20px;
    }
    .main-nav {
      display: flex;
      padding: 0 45px;

      ul {
        display: flex;
        align-items: center;
        gap: 20px;

        .home {
          font-family: 'Helvetica Neue';
          font-style: normal;
          font-weight: 200;
          font-size: 27px;
          letter-spacing: 1.35px;
          text-align: center;
          text-transform: uppercase;
        }

        li {
          font-family: 'Helvetica Neue';
          font-style: normal;
          font-weight: 200;
          font-size: 16px;
          letter-spacing: 1.7px;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  z-index: 100;
`;

export const OpeningMenu = styled.div`
  display: flex;
  top: 0;
  transition: left 0.2s;
  left: ${(props: { menu: boolean }) => (props.menu ? '0%' : '-100%;')};
  height: 367px;
  width: 100%;
  padding: 0 35px;
  flex-direction: column;
  font-size: 20px;
  position: fixed;
  background: #fff;
  z-index: 100;
  font-family: 'Helvetica Neue';
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  font-size: 18px;
  & a {
    text-decoration: none;
    cursor: pointer;
    padding-bottom: 20px;
  }
  & hr {
    width: 53%;
  }
  & div {
    display: flex;
    flex-direction: column;
    opacity: 1;
    padding-bottom: 80px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    & img {
      position: absolute;
      top: 6%;
      left: 6%;
    }
  }
  .menu-bottom {
    padding-top: 40px;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
