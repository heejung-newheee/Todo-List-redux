import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size:${({ theme }) => theme.font};   
    }
    button {
        border: 0;
        cursor: pointer;
        transition: all 0.4s;
    }
`;

export default GlobalStyle;
