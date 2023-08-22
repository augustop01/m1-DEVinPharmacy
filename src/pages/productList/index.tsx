import {useState, useEffect} from "react"
import { ProductProps } from "../newProduct/interfaces"

function ProductList() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    const load = async () => {
      const response = await JSON.parse(localStorage.getItem("products") || "");
      setProducts(response);
    }
    load()
  }, [])

  if(products.length === 0) {
    return(
      <main>
        <h1>Não existem medicamentos cadastrados.</h1>
      </main>
    )
  }

  return(
    <main>
      <div>
        {/* <Card articles={""}/> */}
      </div>
    </main>
  )
}

export {ProductList}