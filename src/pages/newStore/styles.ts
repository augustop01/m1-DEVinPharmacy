import { styled } from "styled-components";

export const MainStyled = styled.main`
background-color: #ebebeb;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - 4rem);
`

export const FormStyled = styled.form`
background-color: #ececec;
border-radius: 1rem;
box-sizing: border-box;
padding: 1rem 0;
display: flex;
flex-direction: column;
width: 60%;
height: 650px;
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
/* background-color: rgba(0,0,0,0.15); */
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
border-radius: 0.5rem;
margin: 0.5rem 1rem 0 1rem;
padding: 1.5rem 0.5rem 0.5rem 0.5rem;
height: 60%;
`

export const PAddress = styled.p`
color: #858585;
position: absolute;
top: 0.25rem;
left: 1rem;
`


export const GeolocStyled = styled.span`
/* position: absolute;
background-color: rgba(0,0,0,0.1);
box-sizing: border-box;
display: flex;
width: 32rem;
height: 5rem;
right: 0.7rem;
bottom: 0.6rem;
margin-left: .1rem;
border-radius: 0.5rem;
justify-content: space-between;
z-index: 1; */
`

export const GeolocInput = styled.input`
border-radius: 0.25rem;
text-align: center;
border: #b1b1b1 2px dashed;
border-bottom: #b1b1b1 2px solid;
background-color: rgb(255, 255, 255);
font-size: 1rem;
padding: .5rem .5rem 0rem .5rem;
margin: .5rem 0;
height: 2.5rem;
width: 15rem;
z-index: 2;
&::placeholder {
  color: #a8a8a9;
}
`

export const ButtonStyled = styled.button`
font-weight: 700;
color: #1784ac;
background-color: white;
border: #179dac 2px solid;
height: 2.5rem;
width: 15%;
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