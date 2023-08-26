import { styled } from "styled-components";

export const MainStyled = styled.main`
background-color: #b8b5ce;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - 4rem);
`

export const FormStyled = styled.form`
position: relative;
background-color: #7072d2;
border-radius: 1rem;
box-sizing: border-box;
padding: 1rem 0;
display: flex;
align-items: center;
width: 50%;
height: 650px;
padding: 4rem 2rem 1rem 2rem;
`

export const SpanStyled = styled.span`
background-color: rgba(0,0,0,0.2);
width: 50%;
height: 30%;
border-radius: 1rem;
justify-content: center;
display: flex;
flex-direction: column;
text-align: center;
margin-right: 2rem;
`

export const H1Styled = styled.h1`
position: absolute;
color: #fefeff;
width: fit-content;
margin-bottom: 5rem;
top: 0.5rem;
right: 15%;
`

export const PStyled = styled.p`
color: #fafafc;
font-weight: 500;
width: fit-content;
`

export const InfoStyled = styled.span`
position: relative;
border-radius: 0.25rem;
background-color: #ffffff;
margin: 1rem 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
box-sizing: border-box;
padding: 1rem 1rem 0 1rem;
width: 100%;
height: 100%;
`

export const InputStyled = styled.input`
border: none;
text-align: center;
border-bottom: #827cb1 2px solid;
background-color: rgb(255, 255, 255);
font-size: 1rem;
padding: .5rem .5rem 0rem .5rem;
margin: .5rem 0;
height: 2.5rem;
width: 20rem;
&::placeholder {
  color: #9e9ab6;
}
&:focus{
  outline: none;
  background-color: rgb(235, 235, 235);
}
`

export const TextAreaStyled = styled.textarea`
border: #827cb1 2px solid;
background-color: rgb(245, 245, 245);
font-size: 1rem;
padding: .5rem 1rem 0rem 1rem;
margin: .5rem 0;
width: 20rem;
&::placeholder {
  text-align: center;
  color: #9e9ab6;
}
&:focus{
  outline: none;
  background-color: rgb(225, 225, 225);
}
`

export const SelectStyled = styled.select`
border: none;
text-align: center;
border-bottom: #827cb1 2px solid;
background-color: rgb(255, 255, 255);
font-size: 1rem;
padding: .5rem .5rem 0rem .5rem;
margin: .5rem 0;
height: 2.5rem;
width: 20rem;
&:first-child {
  color: #9e9ab6;
}
&:focus{
  outline: none;
  background-color: rgb(235, 235, 235);
}
`

export const OptionStyled = styled.option`
&:first-of-type{
  color: #9e9ab6;
}
`

export const ButtonStyled = styled.button`
font-weight: 700;
color: blue;
background-color: white;
border: #393bd1 2px solid;
height: 2.5rem;
width: 25%;
border-radius: 2rem;
margin: 1.5rem 0;
&:hover{
  background-color: #393bd1;
  color: white;
  cursor: pointer;
&:active{
  scale: 0.95
}
}
`