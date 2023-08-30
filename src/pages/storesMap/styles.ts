import { styled } from "styled-components";
import { css } from "styled-components";


export const NoStoreDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-image: url('img/farma-temp.png');
background-repeat: no-repeat;
background-position: center;
background-size: 80%;
align-items: center;
height: 85%;
width: 50%;
`

export const NoStoreH1 = styled.h1`
font-size: 3rem;
text-align: center;
color: #157182;
`

export const NoStoreP = styled.p`
display: flex;
flex-direction: column;
margin-top: 2rem;
align-items: center;
text-align: center;
text-decoration: none;
font-weight: 700;
color: #5f5f5f;
width: 50%;
`

export const NoStoreA = styled.a`
text-decoration: none;
color: #007e9b;
width: fit-content;
&:hover{
  color: #00c9f7;
}
`

const lightMode = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #e6e6e6;
height: calc(100vh - 4rem);
`

const darkMode = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #0d1e1e;
height: calc(100vh - 4rem);
${NoStoreDiv}{
  background-image: url('img/farma-tempDM.png');
}
${NoStoreH1}{
  color: #43a4b5;
}
${NoStoreA}{
  color: #43a4b5;
  &:hover{
    color: #00d9ff;
  }
}
${NoStoreP}{
  color: #6e7e82;
}
`

export const NoStoreMain = styled.main<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && lightMode}
${(props) => props.pagetheme === 'dark' && darkMode}

`



export const MainStyled = styled.main`
display: flex;
justify-content: center;
position: relative;
`

const H1LightMode = css`
color: #fbfbfb;
position: absolute;
text-align: center;
justify-content: center;
box-sizing: border-box;
background: rgb(0, 0, 0);
background: linear-gradient(0deg, rgba(0,0,0,0) 20%, rgba(0, 142, 119, 0.4) 100%);
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.75);
z-index: 2;
width: 100%;
pointer-events: none;
`

const H1DarkMode = css`
color: #ffffff;
position: absolute;
text-align: center;
justify-content: center;
box-sizing: border-box;
background: rgb(0, 0, 0);
background: linear-gradient(0deg, rgba(0,0,0,0) 20%, rgba(0, 142, 119, 0.4) 100%);
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.75);
z-index: 2;
width: 100%;
pointer-events: none;
`

export const H1Styled = styled.h1<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && H1LightMode}
${(props) => props.pagetheme === 'dark' && H1DarkMode}
`