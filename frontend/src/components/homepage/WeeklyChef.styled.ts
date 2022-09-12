import styled from "styled-components";

export const WeeklyChefContainer = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  h6 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
  .chef-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding: 0 20px;
    figure {
      img {
        width: 90vw;
        max-width: 433px;
        object-fit: cover;
      }
      figcaption {
        margin-top: -54px;
        padding: 10px 0;
        background-color: #fff;
        opacity: 0.8;
        font-family: "Helvetica Neue";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        letter-spacing: 1.25px;
      }
    }
    p {
      padding: 0px 16px;
      width: 90%;
      font-family: "Helvetica Neue";
      font-style: normal;
      font-weight: 200;
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 750px) {
    .chef-container {
      flex-direction: row;
      figure {
        margin-right: 64px;
      }
      p {
        max-width: 640px;
      }
    }
  }
`;
