import styled from "styled-components";

export const StylesCartCard = styled.div`
  display: flex;
  height: 80px;
  background-color: var(--color-white);

  div {
    object-fit: cover;
  }

  img {
    object-fit: cover;
    height: 80px;
    background-color: var(--color-grey-3);
    border-radius: 4px;
  }

  .divNameCategory {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    margin-left: 15px;
  }

  p {
    color: var(--color-grey-1);
  }

  small {
    color: var(--color-grey-2);
    cursor: pointer;
  }

  .remove {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px 15px;
    width: 100%;
  }
`;
