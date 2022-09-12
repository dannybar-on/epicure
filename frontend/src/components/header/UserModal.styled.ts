import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
export const UserModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80%;
  background-color: #fff;
  z-index: 101;

  .nav-icon {
    width: 100%;
    height: 15%;
    position: absolute;
    top: 0;
    left: 0;

    img {
      position: absolute;
      top: 15%;
      left: 3%;
      cursor: pointer;
    }
  }

  .auth-header {
    text-align: center;
    position: absolute;
    top: 10%;
  }
  form {
    position: absolute;
    top: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 24px;
    input {
      border: none;
      border-bottom: 1px solid #000;
      margin-bottom: 10px;
      width: 90%;
      background-color: transparent;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 200;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 1.97px;
      color: #000000;
      &:focus {
        outline: none;
      }
    }
    .login-btn {
      background-color: #000;
      color: #fff;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 2.67px;
      text-transform: uppercase;
      width: 206px;
      height: 48px;
      padding: 5px 24px;
      margin: 20px auto;
      cursor: pointer;
    }
    .signup-btn {
      background-color: #fff;
      color: #000;
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 2.67px;
      text-transform: uppercase;
      width: 206px;
      height: 48px;
      padding: 5px 24px;
      margin: 20px auto;
      cursor: pointer;
    }
    p {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 1.97px;
      color: #000000;
      margin-bottom: 15px;
      cursor: pointer;
    }
    .separator {
      width: 100%;
      display: flex;
      align-items: center;
      h1 {
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 1.97px;

        color: #979797;
      }
      .lines {
        height: 0.8px !important;
        display: inline-flex;
        flex: 1;
        margin: 14px 4px 10px 4px;
        background-color: #979797;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
  }
`;
