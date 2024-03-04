import styled from "styled-components";

export const Container = styled.div`
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @container (max-width: 350px){
  flex-wrap: wrap;
  }

`;
