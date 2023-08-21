import { useForm } from "react-hook-form";
import { ProductProps } from "./interfaces";

function NewProduct() {
  const { register, handleSubmit, setValue, reset } = useForm();

  function onSubmit(data: ProductProps) {
    localStorage.setItem("medicamentos", JSON.stringify(data))
  }

  return (
    <main>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>Cadastro de novo medicamento</h3>
        <p>
          Informe os dados do medicamento a ser adicionado ao banco de dados:
        </p>
        <input
          type="text"
          {...register("name")}
          alt="Digite o nome do medicamento"
          placeholder="Nome do medicamento"
          required
        />
        <input
          type="text"
          {...register("lab")}
          alt="Digite o laboratório do medicamento"
          placeholder="Laboratório do medicamento"
          required
        />
        <input
          type="text"
          {...register("dose")}
          alt="Digite a dosagem do medicamento"
          placeholder="Dosagem do medicamento"
          required
        />
        <textarea
          {...register("description")}
          cols= {30}
          rows= {10}
          placeholder="Descrição do medicamenjto (opcional)"
        />
        <input
          type="text"
          {...register("price")}
          alt="Digite o preço unitário do medicamento"
          placeholder="(R$) Preço unitário"
          required
        />
        <select {...register("nature")}>
          <option value="option0" hidden>
            Selecione o tipo do medicamento
          </option>
          <option value="option1">Medicamento controlado</option>
          <option value="option2">Medicamento comum</option>
        </select>
        <button type="submit"> Cadastrar </button>
        <input type="button" onClick={() => reset()} value=" Limpar " />
      </form>
    </main>
  );
}

export { NewProduct };