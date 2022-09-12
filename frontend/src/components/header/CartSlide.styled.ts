import styled from 'styled-components';

export const CartSlideContainer = styled.div`
  display: flex;
  top: 0;
  right: ${(props: { isCart: boolean }) => (props.isCart ? '0%' : '-100%;')};
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
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
  position: absolute;
  .nav-icon {
    position: absolute;
    top: 6%;
    left: 6%;
  }
  .cart-icon {
    width: 44.92px;
    height: 44.92px;
    margin-bottom: 20px;
  }
  h5 {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 17px;
    line-height: 20px;

    text-align: center;
    letter-spacing: 1.97px;
    text-transform: uppercase;

    color: #000000;
  }
`;
