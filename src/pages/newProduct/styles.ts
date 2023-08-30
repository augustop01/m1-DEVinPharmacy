import { css } from "styled-components";
import { styled } from "styled-components";

export const FormStyled = styled.form`
position: relative;
background-color: #e6e6e6;
border-radius: 1rem;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
`

export const H1Styled = styled.h1`
color: #327884;
width: fit-content;
text-align: center;
margin-top: 1.5rem;
`

export const InfoStyled = styled.span`
position: relative;
border-radius: 0.5rem;
background-color: #ffffff;
margin: 1rem 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
box-sizing: border-box;
padding: 1rem 1rem 0 1rem;
width: 55%;
height: 75vh;
`

export const InputStyled = styled.input`
border: none;
text-align: center;
border-bottom: #b1b1b1 2px solid;
background-color: rgb(255, 255, 255);
font-size: 1rem;
padding: .5rem .5rem 0rem .5rem;
margin: .5rem 0;
height: 2.5rem;
width: 80%;
&::placeholder {
  color: #9e9ab6;
}
&:focus{
  outline: none;
  background-color: rgb(235, 235, 235);
}
`
export const InputPriceStyled = styled(InputStyled)`
`

export const TextAreaStyled = styled.textarea`
border: #b1b1b1 2px dashed;
border-bottom: #b1b1b1 2px solid;
border-radius: 0.25rem;
background-color: rgb(245, 245, 245);
font-size: 1rem;
padding: .5rem 1rem 0rem 1rem;
margin: .5rem 0;
width: 80%;
&::placeholder {
  text-align: center;
  color: #9e9ab6;
}
&:focus{
  outline: none;
  background-color: rgb(235, 235, 235);
}
`

export const SelectStyled = styled.select`
border: none;
text-align: center;
border-bottom: #b1b1b1 2px solid;
background-color: rgb(255, 255, 255);
font-size: 1rem;
padding: .5rem .5rem 0rem .5rem;
margin: .5rem 0;
height: 2.5rem;
width: 80%;
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
color: #1784ac;
background-color: white;
border: #1784ac 2px solid;
height: 2.5rem;
width: 5.5rem;
border-radius: 2rem;
margin: 1.5rem 0;
&:hover{
  background-color: #1784ac;
  color: white;
  cursor: pointer;
&:active{
  scale: 0.95
}
}
`

export const MedRegister = styled.p`
position: absolute;
width: 90%;
border-radius: 1rem;
font-size: 1.25rem;
text-align: center;
background-color: rgba(230, 230, 230, 0.5);
color: #00c200;
font-weight: 500;
`

const lightMode = css`
background-color: #e6e6e6;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
min-height: calc(100vh - 4rem);
max-height: fit-content;
`

const darkMode = css`
background-color: #0d1e1e;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
min-height: calc(100vh - 4rem);
max-height: fit-content;
${FormStyled} {
  background-color: transparent;
}
${H1Styled}{
  color: #d1d1d1;
}
${InfoStyled}{
  background-color: #102a2e;
}
${InputStyled}{
  background-color: #102a2e;
  border-bottom: #749ba0 2px solid;
  color: #bde9f0;
  &::placeholder{
    color: #699298;
  }
  &:focus{
    background-color: #0c2023;
  }
}
${TextAreaStyled}{
  background-color: #0c2124;
  border: #749ba0 2px dashed;
  border-bottom: #749ba0 2px solid;
  color: #bde9f0;
  &::placeholder{
    color: #699298;
  }
  &:focus{
    background-color: #09181a;
  }
}
${SelectStyled}{
  background-color: #102a2e;
  border-bottom: #749ba0 2px solid;
  color: #bde9f0;
  &:focus{
    background-color: #0c2023;
  }
}
${ButtonStyled}{
  background-color: transparent;
  border-color: #61c5ff;
  color: #63c6ff;
  &:hover{
    background-color: #63c6ff;
    border-color: #61c5ff;
    color: #0c2023;
  }
}
`

export const MainStyled = styled.main<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && lightMode}
${(props) => props.pagetheme === 'dark' && darkMode}
`
