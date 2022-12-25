import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    :root {
       --color-grey-1: #333333;
       --color-grey-2: #808080;
       --color-grey-3: #c0bfbf;
       --color-grey-4: #e9e9e9;
       --color-white: #Ffffff;
       --color-primary: #27AE60;
       --color-primary-50: #93D7AF;
       --color-secondary: #EB5757;

       --font-title-1: 1.75rem;
        --font-title-2: 1.5rem;
        --font-title-3: 1.25rem;
        --font-title-4: 0.75rem;
        --font-headline: 1rem;
        --font-small: 0.75rem;

    }
    
    ul{
        list-style: none;
    }


    button{
        cursor: pointer;
        border: none;
        background-color: var(--color-primary);
        color: white;
        padding: 12px 15px;
        border-radius: 4px;
    }

    .button-grey{
        background-color: var(--color-grey-3);
    }

    .button-green{
        background-color: var(--color-primary);
    }

    h3{
        color: var(--color-grey-1);
    }

    p{
        color: var(--color-primary);
        font-size: 18px;
        font-weight: 600;
    }


    small{
        color: var(--color-grey-3);
    }

    input{
        padding: 12px;
        background: none;
        outline: none;
        border: solid 1px var(--color-grey-2);
        border-radius: 4px;
        color: var(--color-grey-2);
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px white inset;
    }

    input:-webkit-autofill {
        -webkit-text-fill-color: var(--color-grey-2) !important;
    }

    label{
        position: relative;
        left: 15px;
        top: 18px;
        font-size: var(--font-small);
        background-color: red;
        width: 50px;
        padding: 3px 5px;
        background-color: var(--color-white);
        color: var(--color-grey-3);
    }
`;
