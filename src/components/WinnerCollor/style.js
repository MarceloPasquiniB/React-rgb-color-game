import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  color: ${(props) => props.theme.colors.dark};
`;
