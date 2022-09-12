import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  .logo-container {
    margin: 20px 0;
    img {
      width: 100%;
      max-height: 272px;
      object-fit: cover;
      object-position: center;
    }
  }
  h5 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    padding: 10px 0 0 20px;
  }
  h6 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
    padding: 0 20px;
  }
  .details {
    display: flex;
    flex-direction: column;

    .rest-open {
      display: flex;
      align-items: center;
      padding-left: 20px;
      p {
        font-family: "Helvetica Neue";
        font-style: normal;
        font-weight: 200;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 1.97px;
        padding: 0 10px;
      }
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 600px) {
    .logo-container {
      width: 900px;
      height: 500px;

      img {
        max-height: 100%;
      }
    }
    .details {
      justify-content: center;
      align-items: center;
      gap: 20px;

      h5 {
        font-size: 50px;
      }

      h6 {
        font-size: 32px;
      }

      p {
        font-size: 30px;
      }
    }
  }
`;
