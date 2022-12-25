import styled from "styled-components";

export const StyleCartTotal = styled.section`
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 450px;

  .cart-container {
    width: 98vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart {
    position: fixed;
    top: 80px;
  }

  .title-carts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-primary);
    text-align: left;
    padding: 15px 20px;
    width: 330px;
    height: 50px;
    border-radius: 4px 4px 0 0;
  }

  .title {
    color: var(--color-grey-4);
    font-weight: 600;
  }

  .button-x {
    cursor: pointer;
  }

  .background-black {
    width: 100vw;
    height: 100vh;
    opacity: 70%;
    position: fixed;
    top: 0;
  }

  .divProductsCart {
    height: 220px;
    background-color: var(--color-grey-4);
    border-bottom: solid 2px var(--color-grey-3);
    overflow: scroll;
    padding: 15px;
  }

  .divTotalCart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px;
    height: 90px;
    gap: 10px;
    background-color: var(--color-grey-4);
    border-radius: 0 0 4px 4px;
  }

  .divTotalInfo {
    display: flex;
    justify-content: space-between;
  }

  small {
    color: var(--color-grey-1);
    font-weight: 700;
  }

  p {
    color: var(--color-grey-2);
    font-weight: 600;
  }
`;
