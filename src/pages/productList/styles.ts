import { css } from "styled-components";
import { styled } from "styled-components";



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

const empLightMode = css`
transition: 0.25s;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #e6e6e6;
height: calc(100vh - 4rem);
`

const empDarkMode = css`
transition: 0.25s;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #0d1e1e;
height: calc(100vh - 4rem);
${NoProductDiv}{
  background-image: url('img/med-tempDM.png');
}
${NoProductH1}{
  color: #43a4b5;
}
${NoProductA}{
  color: #43a4b5;
  &:hover{
    color: #00d9ff;
  }
}
${NoProductP}{
  color: #6e7e82;
}
`

export const NoProductMain = styled.main<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && empLightMode}
${(props) => props.pagetheme === 'dark' && empDarkMode}
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

const lightMode = css`
transition: 0.25s;
display: flex;
flex-direction: column;
align-items: center;
background-color: #e6e6e6;
min-height: calc(100vh - 4rem);
max-height: fit-content;
`

const darkMode = css`
transition: 0.25s;
background-color: #0d1e1e;
display: flex;
flex-direction: column;
align-items: center;
min-height: calc(100vh - 4rem);
max-height: fit-content;
${InputStyled}{
  background-color: #102a2e;
  border-color: #102a2e;
  color: #bde9f0;
  &::placeholder{
    color: #699298;
  }
  &:focus{
    background-color: #0c2023;
  }
}
${H2Styled}{
  color: #d0dcde;
}
${SelectStyled}{
  background-color: #102a2e;
  border-color: #102a2e;
  color: #bde9f0;
  &::placeholder{
    color: #699298;
  }
  &:focus{
    background-color: #0c2023;
  }
}
${CardsSectStyled}{
  background-color: #1d3235;
}
`

export const MainStyled = styled.main<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && lightMode}
${(props) => props.pagetheme === 'dark' && darkMode}

`