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
    if(order === "next" && id < meds!.length) {
      const newId = String(id + 1)
      return setIsClicked(meds!.find(x => x.id === newId))
    }
    if(order === "prev" && id > 1){
    const newId = String(id - 1)
    return setIsClicked(meds!.find(x => x.id === newId))
    }
  }

  return(
    <>
      {
        meds!.map((med, index) => {
          return(
              <div key={index} style={{backgroundColor: "grey", width:"10rem", display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem 0"}} id={med.id}>
                <img src={(med.isControlled === 'true') ? "img/med-controlado.png" : "img/med-comum.png"} alt={(med.isControlled === 'true') ? "Ilustração de medicamento controlado" : "lustração de medicamento comum"} width={150} style={{marginTop: "0.3rem"}}/>
                <span>
                  <i/>
                </span>
                <div>
                  <p>{med.name} {med.dose}</p>
                  <p>R${med.price}</p>
                  <button type="button" onClick={function() {setModal(med.id)}}>Adicionar</button>
                </div>
              </div>
          )
        },
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
            <img src={(isClicked?.isControlled === 'true') ? "img/med-controlado.png" : "img/med-comum.png"} alt="" width={150}/>
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