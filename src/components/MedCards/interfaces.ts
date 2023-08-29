import { ProductProps } from "../../pages/newProduct/interfaces"

export interface MedProps {
  meds?: ProductProps[],
  original: ProductProps[],
  byName?: string
  byType?: string,
}