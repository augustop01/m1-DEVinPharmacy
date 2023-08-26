import {styled} from "styled-components";

export const MainStyled = styled.main`
display: flex;
flex-direction: column;
`

export const FilterSectStyled = styled.section`
box-sizing: border-box;
padding: .5rem 12rem;
background-color: #eaeaea;
display: flex;
justify-content: space-between;
align-items: center;
`

export const H2Styled = styled.h2`
color: #67a2ab;
font-size: 2rem
`

export const FormStyled = styled.form`
display: flex;
width: 50%;
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
width: 60%;
&::placeholder{
  color: #a9a9a9;
}
`

export const CardsSectStyled = styled.section`
padding: 0 6rem;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
width: 100%;
min-height: 83vh;
`
