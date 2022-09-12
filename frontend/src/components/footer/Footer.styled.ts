import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 126px;
  width: 100%;
  font-family: "Helvetica Neue";
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 1.92px;
  box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0 20px;
  background-color: #fff;
  /* position: absolute;
  bottom: 0;
  z-index: 500; */

  @media screen and (min-width: 600px) {
    height: 84px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`;
