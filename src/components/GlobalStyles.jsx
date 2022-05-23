import {
    createGlobalStyle
} from "styled-components";

const GlobalStyle = createGlobalStyle `

    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        //this keeps the page from having an extra space of width that cause the page to scroll horizontally.
    }

    

    body {
       
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #F66B0E;
        background: transparent;
        color: black;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: #F66B0E;
            color: white;
        }
        
    }
    h1 {
        font-family: 'Roboto', sans-serif;
    }
    h2 {
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            font-size: 3.5rem;
        }
        h3 {
            font-family: 'Roboto', sans-serif;
            color: black;
        }
        h4 {
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            font-size: 2rem;
        }
        a {
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            font-size: 1.5rem;
        }
        span {
            font-weight: bold;
            color: #F66B0E;
        }
        p {
            font-family: 'Rokkitt', serif;
            padding: 3rem 0rem;
            color: black;
            font-size: 1.5rem;
            line-height: 150%;
        }
`
export default GlobalStyle;