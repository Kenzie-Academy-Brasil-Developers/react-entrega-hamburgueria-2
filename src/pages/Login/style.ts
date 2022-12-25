import styled from "styled-components";

export const StyleLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    display: flex;
    justify-content: space-between;
  }

  .registerContainer {
    display: flex;
    width: 800px;
    height: 500px;
    margin-top: 70px;
  }

  .imgMain {
    width: 50%;
    display: flex;
    justify-content: end;
  }

  img {
    width: 350px;
  }

  .formRegister {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 300px;
    border: solid 2px var(--color-grey-4);
    border-radius: 4px;
    padding: 20px;
    height: 370px;
    text-align: left;
    outline: none;
  }

  button {
    margin-top: 20px;
  }

  small {
    text-align: center;
    margin-top: 20px;
  }

  label {
    position: relative;
    left: 15px;
    top: 15px;
  }

  p {
    color: var(--color-grey-1);
  }

  @media (max-width: 1100px) {
    .container {
      width: 90vw;
    }
    .registerContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .form {
      position: relative;
      top: 30px;
      min-width: 300px;
    }

    .imgMain {
      position: relative;
      top: 40px;
      width: 50%;
      display: flex;
      justify-content: center;
    }

    img {
      width: 300px;
      margin-top: 30px;
    }
  }
`;
