import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: grid;
  top: 10%;
  gap: 50px 60px;
  width: 80%;
  height: 70%;
  align-items: start;

  /* Adicione a propriedade grid-template-columns */
  grid-template-columns: repeat(3, 1fr);
`;