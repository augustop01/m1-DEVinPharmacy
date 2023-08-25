import { MedProps } from "./interfaces"
import { useState } from "react"
import { Modal } from "../Modal";
import * as Styled from './styles'
import { useModal } from "../../hooks/useModal";
import { ProductProps } from "../../pages/newProduct/interfaces";

function MedCards({meds}: MedProps) {
  const {isOpen, toggle} = useModal();
  const [isClicked, setIsClicked] = useState<ProductProps>();

  function setModal(id: string | undefined) {
    setIsClicked(meds!.find(x => x.id === id))
    toggle()
  }

  function changeContent(order: string | undefined) {
    const id = Number(isClicked?.id)
    if(meds!.length > 1){
      if(order === "next" && id < meds!.length) {
        const newId = String(id + 1)
        return setIsClicked(meds!.find(x => x.id === newId))
      }
      if(order === "next" && id == meds?.length){
        return setIsClicked(meds!.find(x => x.id === '1'))
      }
      if(order === "prev" && id > 1){
      const newId = String(id - 1)
      return setIsClicked(meds!.find(x => x.id === newId))
      }
      if(order === "prev" && id == 1){
        return setIsClicked(meds!.find(x => x.id == meds?.length))
      }
    }
  }

  return(
    <>
      {
        meds!.map((med, index) => {
          return(
            <Styled.DivContainerStyled key={index} id={med.id}  onClick={function() {setModal(med.id)}}>
                <Styled.PNameStyled>{med.name}</Styled.PNameStyled>
                <Styled.PDoseStyled>{med.dose}</Styled.PDoseStyled>
                <Styled.ImgStyled src={(med.isControlled === 'true') ? "img/med-controlado2.png" : "img/med-comum2.png"} alt={(med.isControlled === 'true') ? "Ilustração de medicamento controlado" : "lustração de medicamento comum"} width={150}/>
                <Styled.SpanStyled>
                  <i/>
                </Styled.SpanStyled>
                  <Styled.PPriceStyled>R${med.price}</Styled.PPriceStyled>
                  <Styled.ButtonStyled type="button">Adicionar</Styled.ButtonStyled>
              </Styled.DivContainerStyled>
          )
        }
        )
      }
      <Modal isOpen={isOpen} toggle={toggle}>
        <Styled.ModalBgDiv onClick={toggle}/>
        <Styled.ModalContainer>  
          <Styled.BtnClose onClick={toggle}>X</Styled.BtnClose>
          <Styled.BtnPrev onClick={function(){changeContent("prev")}}>{`<<`}</Styled.BtnPrev>
          <Styled.ModalStyle>
            <h1>{isClicked?.name}</h1>
            <h3>{isClicked?.dose}</h3>
            <img src={(isClicked?.isControlled === 'true') ? "img/med-controlado2.png" : "img/med-comum2.png"} alt="" width={150}/>
            <h4>{(isClicked?.isControlled === 'true') ? "Medicamento Controlado" : "Medicamento Comum"}</h4>
            <p>{isClicked?.description}</p>
            <h5>Laboratório [{isClicked?.lab}]</h5>
            <h2>R${isClicked?.price}</h2>
            <h5>Preço unitário</h5>
            <button type="button"> + Adicionar </button>
          </Styled.ModalStyle>
          <Styled.BtnNext onClick={function(){changeContent("next")}}>{`>>`}</Styled.BtnNext>
        </Styled.ModalContainer>
      </Modal>
    </>
  )
}

export {MedCards};