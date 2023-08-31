import { styled } from "styled-components";
import { css } from "styled-components";

export const FormStyled = styled.form`
position: relative;
background: rgb(65, 149, 155);
background: linear-gradient(90deg, rgba(65, 149, 155, 1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 95%, rgba(65, 149, 155, 1) 95%);
box-sizing: border-box;
width: 27%;
height: 18rem;
display: flex;
flex-direction: column;
border-radius: 1.5rem;
box-shadow: 0px 2px 10px rgba(0,0,0,0.3);
justify-content: space-between;
padding: 2rem 2rem 1rem 2rem;
`

export const H3Styled = styled.h3`
color: #1a8fa3
`

export const HrStyled = styled.hr`
position: absolute;
border: none;
border-top: #a9cfd7 2px solid;
width: 35%;
top: 4rem;
`


export const InputStyled = styled.input`
border: none;
background-color: #ffffff;
border-bottom: #b6b6b6 1px solid;
height: 2.5rem;
padding: 0 1rem;
width: 8;
border-radius: 0.25rem;
font-weight: 500;
&:focus{
  outline: none;
  background-color: #f5f5f5;
}
`

export const ButtonStyled = styled.button`
background-color: #156683;
color: #f9f9f9;
font-weight: 600;
border: none;
width: 5rem;
align-self: center;
border-radius: 1.5rem;
height: 2.25rem;
margin-top: 1rem;
&:hover{
  background-color: #0a9fd5;
  cursor:pointer;
}
&:active{
  scale: 0.9
}
`
const lightMode = css`
transition: 0.25s;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: calc(100vh - 4rem);
max-height: fit-content;
background-color: #eaeaea;
`

const darkMode = css`
transition: 0.25s;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: calc(100vh - 4rem);
max-height: fit-content;
background-color: #142b2b;
${FormStyled}{
  background: rgb(65, 149, 155);
background: linear-gradient(90deg, rgba(34, 78, 84, 1) 5%, rgba(47, 121, 130, 1) 5%, rgba(47, 121, 130, 1) 95%, rgba(34, 78, 84, 1) 95%);
}
${H3Styled}{
  color: #ffffff;
}
${InputStyled}{
  background: rgb(47, 121, 130);
  border-bottom: rgb(104, 172, 174) 1px solid;
  color: #c9e1ff;
  font-weight: 500;
  &:focus{
    background-color: rgba(0, 0, 0, 0.1);
  }
  &::placeholder{
    color: #9ab8bb;
  }
}
${ButtonStyled}{
  background-color: #1a575d;
  &:hover{
    background-color: #4cbac4eb;
  }
}
`

export const MainStyled = styled.main<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && lightMode}
${(props) => props.pagetheme === 'dark' && darkMode}
`
