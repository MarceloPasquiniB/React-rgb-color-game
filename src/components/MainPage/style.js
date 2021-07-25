import styled from "styled-components";


export const AppName = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-top: 5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.dark};
`;


export const WhiteBackground = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  margin: 1rem 0;
  padding: 1rem;
  line-height: 2rem;
  height: 95px;
  width: 90%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: thin;
  border-radius: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-area: "a b" "c d";
  height: auto;
  width: 90%;
  max-width: 450px;
  margin: 0 10px;
  grid-gap: 10px;
  justify-items: center;
`;


export const FlexWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 10px 0;
`;
