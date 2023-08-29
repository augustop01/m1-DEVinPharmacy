import {styled} from "styled-components";


export const NoProductMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #e6e6e6;
height: calc(100vh - 4rem);
`

export const NoProductDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-image: url('img/med-temp.png');
background-repeat: no-repeat;
background-position: center;
background-size: 80%;
align-items: center;
text-align: center;
height: 85%;
width: 45%;
`

export const NoProductH1 = styled.h1`
font-size: 3rem;
display: flex;
align-items: center;
justify-content: center;
color: #157182;
`

export const NoProductP = styled.p`
display: flex;
flex-direction: column;
margin-top: 2rem;
align-items: center;
text-decoration: none;
font-weight: 700;
color: #5f5f5f;
width: 50%;
`

export const NoProductA = styled.a`
text-decoration: none;
color: #007e9b;
width: fit-content;
&:hover{
  color: #00c9f7;
}
`

export const MainStyled = styled.main`
display: flex;
flex-direction: column;
align-items: center;
background-color: #e6e6e6;
min-height: calc(100vh - 4rem);
max-height: fit-content;
`

export const FilterSectStyled = styled.section`
box-sizing: border-box;
padding: .5rem 0;
display: flex;
height: 5rem;
justify-content: space-around;
align-items: center;
width: 80%;
`

export const H2Styled = styled.h2`
color: #327884;
font-size: 2rem;
width: 100%;
`

export const FormStyled = styled.form`
display: flex;
width: 100%;
`

export const SelectStyled = styled.select`
box-sizing: border-box;
border: rgb(156, 156, 255) solid 1px;
box-shadow: 0px -1px 1px rgb(156, 156, 255);
border-radius: .25rem;
font-size: .9rem;
margin-right: 1rem;
padding: .5rem;
&:first-child{
  color: #a9a9a9;
}
`

export const OptionStyled = styled.option`
color: #808080;
`

export const InputStyled = styled.input`
box-sizing: border-box;
border: rgb(156, 156, 255) solid 1px;
box-shadow: 0px -1px 1px rgb(156, 156, 255);
border-radius: .25rem;
padding: .5rem;
font-size: .9rem;
width: 18rem;
&::placeholder{
  color: #a9a9a9;
}
`

export const CardsSectStyled = styled.section`
background-color: white;
border-radius: 1rem;
padding: 0 2rem;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
width: 90%;
min-height: 50%;
max-height: 86.5%;
margin-bottom: 1rem;
`
