import {createGlobalStyle, styled} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`


export const ThemeButton = styled.button`
width: 3rem;
height: 3rem;
background-color: blue;
border-radius: 50%;
position: absolute;
`