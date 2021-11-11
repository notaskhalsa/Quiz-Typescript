import styled, { createGlobalStyle } from 'styled-components';
import bgimg from './images/bgimage1.gif'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        height: 100%;
    }

    body{
        background-image: url(${bgimg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    #main{
        z-index:1000;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    // p {
    //     font-size: 1.4rem;
    //     margin-bottom: 20px;
    // }

    .score {
        color: black;
        font-size: 2rem;
        margin: 0;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        // background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        filter: drop-shadow(2px 2px #333);
        font-size: 70px;
        font-weigth: 400;
        text-align: center;
        margin: 20px;
    }

    // button{
    //     margin-bottom: 10px;
    //     font-size: 1.1rem;
    //     padding: 6px 12px;
    // }

    // button:hover{
    //     background-color: lightsalmon;
    // }

    .start, .next{
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start{
        max-width: 200px;
    }
`