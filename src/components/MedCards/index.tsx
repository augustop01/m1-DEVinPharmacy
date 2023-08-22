import { MedProps } from "./interfaces"


function MedCards({meds}: MedProps) {
  return(
    <>
      {
        meds.map((med, index) => {
          return(
              <div key={index}>
                <img src={(med.isControlled === 'true') ? "src/assets/dorflex.png" : "src/assets/doril.jpg"} alt={(med.isControlled === 'true') ? "Ilustração de medicamento controlado" : "lustração de medicamento comum"} width={150}/>
                <span>
                  <i/>
                </span>
                <div>
                  <p>{med.name} {med.dose}</p>
                  <p>R${med.price}</p>
                  <button type="button">Adicionar</button>
                </div>
              </div>
          )
        })
      }
    </>
  )
}

export {MedCards};