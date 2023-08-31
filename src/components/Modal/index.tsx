import { ModalProps } from "./interfaces";
import {ModalOverlayDiv, ModalDiv} from "./styles"

function Modal(props: ModalProps) {
  return(
    <>
    {props.isOpen && (
      <ModalDiv>
        <ModalOverlayDiv>
            {props.children}
        </ModalOverlayDiv>
      </ModalDiv>
      )}
    </>
  )}

export {Modal};