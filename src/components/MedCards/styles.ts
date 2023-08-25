import styled, { keyframes } from "styled-components";

//Card container


export const PNameStyled = styled.p`
color: #0900ad;
margin-top: 0.5rem;
font-weight: 800;
`

export const PDoseStyled = styled.p`
color: #8a8a8a;
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
  color: #ff7700;
  margin: 1rem;
  `

export const ButtonStyled = styled.button`
  margin-bottom: 0.5rem;
  `

  export const DivContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.5rem;
  border-radius: 1rem;
  border: blue 1px solid;
  background-color: white;
  height: fit-content;
  margin: 0.5rem 1rem;
    &:hover{
      background-color: #F0F0F0;
      cursor: pointer;
      ${PDoseStyled} {
        color: blue;
      }
      ${ImgStyled}{
        background-color: white;
      }
    }
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
  width: 100%;
`;


export const ModalContainer = styled.section`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  animation-name: ${growAnimation};
  animation-duration: 0.25s;
  background-color: #E5E5E5;
  border-radius: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  padding: 2rem;
  position: relative;
  transition: 0.5s;
  width: 35rem;
  `;

export const BtnClose = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 999;
`

export const BtnPrev = styled.button`
  left: 2%;
  height: fit-content;
  `
  
export const BtnNext = styled.button`
  height: fit-content;
  right: 2%;
  top: 50%;
  `

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0 1.5rem;
`;

//Modal content
