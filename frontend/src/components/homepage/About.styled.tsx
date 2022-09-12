import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 10px 20px;
  z-index: 2;
  background-color: #fafafa;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-evenly;

  .logo {
    width: 102px;
    height: 95px;
  }
  .about-container {
    min-width: 331px;
    & span {
      text-align: left;
      font-family: "Helvetica Neue";
      font-style: normal;
      font-weight: 200;
      font-size: 18px;
      line-height: 35px;
      letter-spacing: 1.25px;
      text-transform: uppercase;
    }

    & p {
      text-align: left;
      font-size: 14px;
      font-weight: 200;
      font-family: "Helvetica Neue";
      font-style: normal;
      line-height: 20px;
    }

    .download {
      display: flex;
      flex-direction: column;

      .button {
        margin: 5px;
        padding: 5px 10px;
        border: 0.5px solid black;
        border-radius: 7px;
        display: flex;
        max-width: 105px;
        text-align: center;
        & img {
          margin-right: 5px;
        }
        .line {
          font-size: 9px;
        }
        .marka {
          font-size: 12px;
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    /* max-width: 900px; */
    padding: 20px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 180px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .about-container {
      max-width: 500px;
      flex-direction: column;
      position: relative;

      p {
        font-size: 20px;
        line-height: 30px;
        padding-bottom: 50px;
      }
      .download {
        flex-direction: row;
        position: absolute;
        bottom: 0;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
`;
