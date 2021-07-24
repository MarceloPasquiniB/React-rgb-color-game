import styled from "styled-components";

export const ButtonColor = styled.button`
  background-color: ${(props) => props.theme.colors.dark};
  height: 6rem;
  width: 100%;
  max-width: 200px;
  border-radius: 16px;
  cursor: pointer;
  border: thin;
  border-style: solid;
`;