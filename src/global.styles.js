import { createGlobalStyle } from "styled-components";

const fontColor = '#3a3a3a';
export const GlobalStyle = createGlobalStyle`

body {
    font-family: "Quicksand", sans-serif;
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
    padding: 10px;
    }
}

a {
    text-decoration: none;
    color: ${fontColor};
}

*{
    box-sizing: border-box;
}
`;
