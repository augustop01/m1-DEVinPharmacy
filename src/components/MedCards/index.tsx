import { MedProps } from "./interfaces"


function MedCards({meds}: MedProps) {
  return(
    <>
      {
        meds.map((med, index) => {
          return(
              <div key={index}>
                <img src={med.nature == "controlado" ? "src/assets/doril.jpg" : "src/assets/dorflex.png"} alt={med.nature == "controlado" ? "Ilustração de medicamento controlado" : "lustração de medicamento comum"} width={150}/>
                <span>
                  <i/>
                </span>
                <div>
                  <p>{med.lab}</p>
                  <p>{med.name} {med.dose}</p>
                  <p>{med.nature}</p>
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