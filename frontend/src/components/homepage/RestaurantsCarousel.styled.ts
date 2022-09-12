import styled from "styled-components";

export const Carousel = styled.div`
  max-width: 98vw;
  padding: 40px 0 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h5 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 24px;
    padding-left: 20px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
  h3 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    padding-left: 20px;
  }
  .slick-slide > div {
    margin: 0 7px;
  }
  & button {
    display: none !important;
  }

  .rest-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    gap: 12px;
    a {
      font-family: "Helvetica Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 35px;
      letter-spacing: 2px;
      text-transform: capitalize;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
