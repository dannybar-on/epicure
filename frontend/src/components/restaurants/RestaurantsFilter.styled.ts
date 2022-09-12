import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  height: 60px;

  div {
    width: 400px;
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      background-color: transparent;
      font-family: "Helvetica Neue";
      font-style: normal;
      font-weight: 200;
      font-size: 20px;
      line-height: 22px;
      letter-spacing: 1.92px;
      cursor: pointer;
    }
  }
`;
