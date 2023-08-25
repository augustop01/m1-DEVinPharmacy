import { styled } from "styled-components";

export const MainStyled = styled.main`
display: flex;
justify-content: center;
position: relative;
`

export const H1Styled = styled.h1`
color: white;
position: absolute;
text-align: center;
justify-content: center;
box-sizing: border-box;
background: rgb(0, 0, 0);
background: linear-gradient(0deg, rgba(255,255,255,0) 40%, rgba(16, 0, 105, 0.5) 100%);
text-shadow: 2px 2px 5px rgba(16, 0, 105, 1);
z-index: 2;
width: 100%;
margin-top: -0.4rem;
pointer-events: none;
`