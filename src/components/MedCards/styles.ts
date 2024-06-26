import styled,{ keyframes} from "styled-components";
import { ProductProps } from "../../pages/newProduct/interfaces";
import { css } from "styled-components";

//Card container

export const PNameStyled = styled.p`
color: #2e9cb2;
margin-top: 0.5rem;
font-weight: 800;
`

export const PDoseStyled = styled.p`
color: #a7a7a7;
font-size: 0.75rem;
font-weight: 800;
margin-top: -0.2rem;
margin-bottom: 0.25rem;
`

export const ImgStyled = styled.img`
background-color: #efefef;
border-radius: 1rem;
`

export const SpanStyled = styled.span`

`

export const PPriceStyled = styled.p`
  font-size: 1.25rem;
  font-weight: 800;
  color: #ff9d00;
  margin: 1rem;
  `

export const ButtonStyled = styled.button`
  margin-bottom: 0.5rem;
  `




const lightMode = css`
display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.5rem;
  margin: 1rem 0.25rem;
  border-radius: 1rem;
  border: #00909b 2px solid;
  background-color: white;
  height: fit-content;
    &:hover{
      background-color: #e4e9ea;
      cursor: pointer;
      ${PDoseStyled} {
        color: #77a5b9;
      }
      ${ImgStyled}{
        background-color: white;
      }
    }
`

const darkMode = css`
display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.5rem;
  margin: 1rem 0.25rem;
  border-radius: 1rem;
  border: #5a8194 2px solid;
  background-color: #1d3235;
  height: fit-content;
  ${PNameStyled}{
    color: #95c3c6;
  }
  ${PDoseStyled}{
    color: #698587;
  }
  ${ImgStyled}{
    background-color: rgba(85, 193, 255, 0.05);
  }
  ${PPriceStyled}{
    color: #ff9900;
  }
    &:hover{
      background-color: #284245;
      cursor: pointer;
      ${PDoseStyled} {
        color: #ffffff;
      }
      ${ImgStyled}{
        background-color: rgba(85, 193, 255,0.1);
      }
    }
`

export const DivContainerStyled = styled.div<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && lightMode}
${(props) => props.pagetheme === 'dark' && darkMode}

`

//---------- MedCards Modal tags
// Modal container
const fadeAnimation = keyframes`
  0% {opacity: 25%}
  100% {opacity: 100%}
`;
const growAnimation = keyframes`
  0% {scale: 25%}
  100% {scale: 100%}
`;

export const ModalBgDiv = styled.section`
  animation-duration: 0.25s;
  animation-name: ${fadeAnimation};
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  height: 100vh;
  position: absolute;
  transition: 0.5s;
  top: -3rem;
  left: 0;
  width: 100%;
`

export const BtnClose = styled.button`
  background-color: transparent;
  position: absolute;
  top: 0.4rem;
  right: 1rem;
  color: #cecece;
  transform: scale(2.5, 2);
  border: none;
  height: fit-content;
  width: fit-content;
  z-index: 999;
  &:hover{
    scale: 1.25;
  }
  &:active{
    scale: 1;
    color: red;
  }
`

export const BtnPrev = styled.button`
  color: #8f8e8e;
  background-color: #F0F0F0;
  border: none;
  margin-left: 1rem;
  left: 4%;
  border-radius: 0.25rem;
  width: 1.5rem;
  height: fit-content;
  scale: 1.5;
  &:hover{
    scale: 1.75;
  }
  &:active{
    scale: 1.5;
  }
  `

export const BtnNext = styled(BtnPrev)`
  margin-left: 0;
  margin-right: 1rem;
  left: auto;
  right: 2%;
  `

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 95%;
  overflow: scroll;
    &::-webkit-scrollbar{
      display: none;
    }
`;

//---------------- Modal content
interface Props {
  isControlled?: ProductProps | boolean;
  hasDescription?:  ProductProps | string;
}

export const PNameModal = styled.p`
color: #12b1b1;
font-size: 2rem;
font-weight: 700;
`

export const PDoseModal = styled.p`
color: #749aa8;
font-size: 1.1rem;
font-weight: 600;
margin-top: -.5rem;
margin-bottom: 1rem;

`

export const ImgModal = styled.img`
background-color: #f1f1f1;
border-radius: 1rem;
width: 12.5rem;
margin-bottom: -2rem;
`

export const PLabModal = styled.p`
font-weight: 800;
font-size: 0.75rem;
color: #9e9e9e;
`

export const PNatureModal = styled.p<Props>`
margin-top: 1rem;
color: ${props => props.isControlled ? '#f25eff' : '#84c3cb'};
font-weight: 600;
`

export const PPriceModal = styled.p`
color: #ffae00;
font-size: 2rem;
font-weight: 800;
margin-top: 1.5rem;
`

export const PUnitModal = styled.p`
margin-top: -0.5rem;
font-weight: 600;
font-size: 0.75rem;
color: #9e9e9e;
margin-bottom: 2rem;
`

export const PInfoModal = styled.p<Props>`
color: ${props => props.hasDescription ? '#525252' : '#aeaece'};
font-size: 0.75rem;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
border-radius: 0.5rem;
padding: 1rem;
background-color: #f0f0f0;
min-height: 10rem;
width: 80%;
`

//Modal content

const modalLightMode = css`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  animation-name: ${growAnimation};
  animation-duration: 0.25s;
  background-color: #fafafa;
  border-radius: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  position: absolute;
  transition: 0.5s;
  width: 35rem;
  margin-top: .75rem;
`

const modalDarkMode = css`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  animation-name: ${growAnimation};
  animation-duration: 0.25s;
  background-color: #233f43;
  border-radius: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  position: absolute;
  transition: 0.5s;
  width: 35rem;
  margin-top: .75rem;
  ${PNameModal}{
    color: #89deea;
  }
  ${ImgModal}{
    background-color: rgba(255,255,255,0.05);
  }
  ${PLabModal}{
    color: #bcbbbb;
  }
  ${PInfoModal}{
    background-color: rgba(0,0,0,0.15);
    color: #bccfd1;
  }
  ${BtnPrev}{
    background-color: rgba(149, 226, 245, 0.2);
    color: #233f43;
  }
  ${BtnClose}{
    color: rgba(149, 226, 245, 0.3);
  }
`

export const ModalContainer = styled.section<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && modalLightMode}
${(props) => props.pagetheme === 'dark' && modalDarkMode}

`