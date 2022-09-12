import styled from 'styled-components';

export const Card = styled.div`
  margin: 5px;
  width: 100%;
  height: 100%;
  min-width: 150px;
  max-width: 200px;
  background: #f9f4ea;
  display: flex;
  flex-direction: column;
  flex: 1;
  img {
    width: 100%;
  }
  .dish-details {
    min-height: 320px;
    max-height: 320px;
    max-width: 260px;
    min-width: 150px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    h1 {
      font-family: 'Helvetica Neue';
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: 1.2px;
      padding: 0 10px;
    }
    h4 {
      font-family: 'Helvetica Neue';
      font-weight: 200;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: 1.2px;
      padding: 0 10px;
    }
    .price {
      width: 100%;
      display: flex;
      align-items: center;
      .lines {
        height: 0.8px !important;
        display: inline-flex;
        flex: 1;
        margin: 14px 4px 10px 4px;
        background-color: #979797;
      }
    }
  }
  .weekly-chef {
    width: 100%;
    height: 100%;
    min-width: 150px;
    max-width: 200px;
    background: #f9f4ea;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: 20px;

    h2 {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 21px;
      letter-spacing: 2.67px;
      padding: 0 10px;
    }
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 850px) {
    min-width: 260px;
    img {
      width: 100%;
    }
  }
`;
