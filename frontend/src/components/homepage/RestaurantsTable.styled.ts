import styled from "styled-components";

export const TableContainer = styled.div`
  padding: 40px 0 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1px;
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
  .restaurants {
    display: flex;
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
