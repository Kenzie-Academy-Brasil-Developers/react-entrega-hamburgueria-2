import styled from "styled-components";

export const StyleContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 30px;

  @media (max-width: 1100px) {
    margin-top: 80px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyleCartDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
  justify-content: left;
  gap: 30px;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: scroll;
    gap: 30px;
    max-width: 100%;
  }
`;

export const StyleCartSection = styled.section`
  width: 227.5px;
  height: 330px;
  display: flex;
  flex-direction: column;
  border: solid 1px var(--color-grey-3);
  border-radius: 4px;
  background-color: var(--color-white);
  text-align: left;

  @media (max-width: 1100px) {
    min-width: 200px;
  }

  .ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .liImg {
    min-height: 140px;
  }

  img {
    object-fit: cover;
    height: 140px;
    width: 100%;
    background-color: var(--color-grey-4);
  }

  .divInfo {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 15px;
  }
`;
