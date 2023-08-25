import styled from "styled-components";

export const ModalDiv = styled.div`
display: flex;
justify-content: center;
position: absolute;
width: 100%;
height: 140%;
top: 0;
z-index: 1000;
`
export const ModalOverlayDiv = styled.div`
  overflow: visible;
  width: auto;
  height: fit-content;
  display: flex;
  position: sticky;
  justify-content: center;
  top: 3rem;
  padding-bottom: -100vh;
  width: 100%;
`