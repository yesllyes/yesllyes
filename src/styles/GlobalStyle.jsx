import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        font-family: "NexonGothic";
    }

    button {
        font-family: inherit;
        border: none;
    }
`;

export default GlobalStyle;
