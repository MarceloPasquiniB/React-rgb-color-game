import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${()=> theme.colors.light}
    }
`;
    
