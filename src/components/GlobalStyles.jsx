import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100vw;
        overflow-x: hidden;
    }

    *,
    *::before,
    *::after {
    box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Manrope', sans-serif;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
}

button {
    border: none;
    padding: 0;
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    max-width: 100%;
    display: block;
    height: auto;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
`;