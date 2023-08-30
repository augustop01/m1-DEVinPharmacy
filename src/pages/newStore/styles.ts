import { styled } from "styled-components";
import { css } from "styled-components";

export const FormStyled = styled.form`
background-color: transparent;
border-radius: 1rem;
box-sizing: border-box;
padding: 1rem 0;
display: flex;
flex-direction: column;
width: 60%;
padding: 1rem 2rem;
`

export const H1Styled = styled.h1`
color: #327884;
`

export const PStyled = styled.p`
color: #419cac;
font-weight: 500;
`

export const PageHr = styled.hr`
  border-top: 3px solid #bbb;
`

export const InfoStyled = styled.span`
position: relative;
border-radius: 0.5rem;
background-color: #ffffff;
margin: 1rem 0;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
box-sizing: border-box;
padding: 2rem 1rem;
width: fit-content;
height: 100%;
`

export const PForm = styled.p`
color: #858585;
position: absolute;
top: 0.25rem;
left: 2rem;
`

export const InputStyled = styled.input`
border: none;
text-align: center;
border-bottom: #b1b1b1 2px solid;
background-color: rgb(255, 255, 255);
font-size: .9rem;
padding: .5rem .5rem 0rem .5rem;
margin: .5rem 0;
height: 2.5rem;
width: 15rem;
&::placeholder {
  color: #a8a8a9;
}
&:focus{
  outline: none;
  background-color: rgb(235, 235, 235);
}
`

export const AddressStyled = styled.fieldset`
border: #b8b8b8 2px dashed;
position: relative;
box-sizing: border-box;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
border-radius: 0.5rem;
margin: 0.5rem 1rem 0 1rem;
padding: 1.5rem 0.5rem 0.5rem 0.5rem;
min-height: 250px;
${InputStyled}{
  margin-top: 1.25rem;
}`

export const PAddress = styled(PForm)`
left: 1rem;
`

export const GeolocInput = styled(InputStyled)`
border-radius: 0.25rem;
border: #b1b1b1 2px dashed;
border-bottom: #b1b1b1 2px solid;
font-size: 1rem;
`

export const ButtonStyled = styled.button`
font-weight: 700;
color: #1784ac;
background-color: white;
border: #179dac 2px solid;
height: 2.25rem;
width: 5.5rem;
border-radius: 2rem;
margin-top: 1.5rem;
&:hover{
  background-color: #179dac;
  color: white;
  cursor: pointer;
&:active{
  scale: 0.95
}
}
`

export const PharmRegister = styled.p`
display: flex;
backdrop-filter: blur(5px);
align-items: center;
position: absolute;
width: 40%;
height: 10rem;
border-radius: 2rem;
font-size: 1.25rem;
text-align: center;
background-color: rgba(216, 216, 216, 0.4);
color: #00c200;
font-weight: 500;
`


const lightMode = css`
transition: 0.25s;
background-color: #e6e6e6;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
min-height: calc(100vh - 4rem);
max-height: fit-content;
`

const darkMode = css`
transition: 0.25s;
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
${PForm}{
  color: #56757a;
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
${AddressStyled}{
  border: #749ba0 2px dashed;
}
${GeolocInput}{
  border: #749ba0 2px dashed;
  border-bottom: #749ba0 2px solid;
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
${PharmRegister}{
  background-color: rgba(103, 136, 140, 0.486);
}
`

export const MainStyled = styled.main<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && lightMode}
${(props) => props.pagetheme === 'dark' && darkMode}

`