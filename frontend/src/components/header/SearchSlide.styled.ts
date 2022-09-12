import styled from 'styled-components';

export const SearchSlideContainer = styled.div`
  display: flex;
  top: 0;
  right: ${(props: { search: boolean }) => (props.search ? '0%' : '-100%;')};
  transition: left 0.2s;
  height: 367px;
  width: 100%;
  max-width: 377px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 100;
  font-family: 'Helvetica Neue';
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  position: fixed;

  h1 {
    position: absolute;
    top: 5%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 22px;

    letter-spacing: 1.92px;

    color: #000000;
  }
  & .nav-icon {
    position: absolute;
    top: 6%;
    left: 6%;
  }

  div {
    input {
      width: 280px;
      text-align: center;
      padding: 5px 0;
      margin: 0 auto;
    }
    .search-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      margin: 5px;
    }
  }
`;
