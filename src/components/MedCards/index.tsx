import { MedProps } from "./interfaces"
import { useState} from "react"
import { Modal } from "../Modal";
import * as Styled from './styles'
import { useModal } from "../../hooks/useModal";
import { ProductProps } from "../../pages/newProduct/interfaces";
import { useApp } from '../../hooks/useApp';

function MedCards({meds, original}: MedProps) {
  const {isOpen, toggle} = useModal();
  const [isClicked, setIsClicked] = useState<ProductProps>();
  const {theme} = useApp();

  function setModal(id: string | undefined) {
    setIsClicked(meds!.find(x => x.id === id))
    toggle()
  }

  function changeContent(order: string | undefined) {
    const id = Number(isClicked?.id)
    if(meds!.length > 1){
      if(order === "next" && id < original.length) {
        let newId = id + 1;
        let newList = meds!.find(x => x.id === String(newId))
        if (!newList) {
          while(newList == undefined && newId < original.length){
            newId++
            newList = meds!.find(x => x.id === String(newId))
          }
          while(newList === undefined && newId === original.length){
            newId = 1;
            newList = meds!.find(x => x.id === String(newId))
          }
          while(newList === undefined){
            newId++
            newList = meds!.find(x => x.id === String(newId))
          }
          return setIsClicked(newList)
        }
        return setIsClicked(newList)
      }
      if(order === "next" && id == original?.length){
        let newId = 1;
        let newList = meds!.find(x => x.id === String(newId))
        if (!newList) {
          while(newList == null || newList == undefined){
            newId++
            newList = meds!.find(x => x.id === String(newId))
          }
        }
        return setIsClicked(newList)
      }
      if(order === "prev" && id > 1){
        let newId = id - 1;
        let newList = meds!.find(x => x.id === String(newId))
        if (!newList) {
          while(newList == undefined && newId > 1){
            newId--
            newList = meds!.find(x => x.id === String(newId))
          }
          while(newList == undefined && newId === 1){
            newId = original.length;
            newList = meds!.find(x => x.id === String(newId))
          }
          while(newList == undefined){
            newId--
            newList = meds!.find(x => x.id === String(newId))
          }
          return setIsClicked(newList)
        }
        return setIsClicked(newList)
      }
      if(order === "prev" && id == 1){
        let newId = original.length;
        let newList = meds!.find(x => x.id === String(newId));
        if (!newList) {
          while(newList === null || newList === undefined){
            newId--
            newList = meds!.find(x => x.id === String(newId))
          }
          return setIsClicked(newList)
        }
        return setIsClicked(newList)
      }
    }
  }

  return(
    <>
      {
        meds!.map((med, index) => {
          return(
            <Styled.DivContainerStyled key={index} id={med.id} pagetheme={theme} onClick={function() {setModal(med.id)}}>
                <Styled.PNameStyled>{med.name}</Styled.PNameStyled>
                <Styled.PDoseStyled>{med.dose}</Styled.PDoseStyled>
                <Styled.ImgStyled src={(med.isControlled === 'true') ? "img/med-controlado2.png" : "img/med-comum2.png"} alt={(med.isControlled === 'true') ? "Ilustração de medicamento controlado" : "lustração de medicamento comum"} width={150}/>
                <Styled.SpanStyled>
                  <i/>
                </Styled.SpanStyled>
                  <Styled.PPriceStyled>R${med.price}</Styled.PPriceStyled>
              </Styled.DivContainerStyled>
          )
        }
        )
      }
      <Modal isOpen={isOpen} toggle={toggle}>
        <Styled.ModalBgDiv onClick={toggle}/>
        <Styled.ModalContainer pagetheme={theme}>  
          <Styled.BtnClose onClick={toggle}>x</Styled.BtnClose>
          <Styled.BtnPrev onClick={function(){changeContent("prev")}}>{`<<`}</Styled.BtnPrev>
          <Styled.ModalStyle>
            <Styled.PNameModal>{isClicked?.name}</Styled.PNameModal>
            <Styled.PDoseModal>{isClicked?.dose}</Styled.PDoseModal>
            <Styled.ImgModal src={(isClicked?.isControlled === 'true') ? "img/med-controlado2.png" : "img/med-comum2.png"} alt=""/>
            <Styled.PLabModal>Laboratório [{isClicked?.lab}]</Styled.PLabModal>
            <Styled.PNatureModal isControlled={isClicked?.isControlled === 'true'}>{(isClicked?.isControlled === 'true') ? "Medicamento Controlado" : "Medicamento Comum"}</Styled.PNatureModal>
            <Styled.PPriceModal>R${isClicked?.price}</Styled.PPriceModal>
            <Styled.PUnitModal>Valor unitário</Styled.PUnitModal>
            <Styled.PInfoModal hasDescription={isClicked?.description}>{isClicked?.description ? `${isClicked.description}` : `Não foi adicionada nenhuma descrição para este medicamento.`}</Styled.PInfoModal>
          </Styled.ModalStyle>
          <Styled.BtnNext onClick={function(){changeContent("next")}}>{`>>`}</Styled.BtnNext>
        </Styled.ModalContainer>
      </Modal>
    </>
  )
}

export {MedCards};