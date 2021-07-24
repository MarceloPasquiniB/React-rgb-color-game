import styled from "styled-components";

export const Text = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.colors.dark};
  background-size: 2rem;
  line-height: 5px;
`;