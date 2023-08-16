import { useForm } from "react-hook-form";
import { useApp } from "../../hooks/useApp";
import { LoginProps } from "./interfaces";

function Login() {

const {register, handleSubmit, reset} = useForm();
const {setValue} = useApp();

function emailRegex(input: string) {
  const regex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i) 
  return regex.test(input)
}

function pswRegex(input: string) {
  const regex = new RegExp(/^(?=.*[a-z])(?=.*[0-9])[a-z\d]{8,20}$/i)
  return regex.test(input)
}

function onSubmit(data: LoginProps) {
  const email = String(data.email)
  const password = String(data.password)
  if (email.length == 0) {
    return
  }
  if (emailRegex(`${email}`)) {
    if(pswRegex(`${password}`) && password.length > 0) {
      setValue(data as string)
      reset();
      return
    }
    alert("A senha deve conter de 8 a 20 caracteres, tendo pelo menos uma letra e um número.")
    return
  }
alert("O e-mail digitado não é válido.\nEx: email@email.com")
}

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Faça seu login:</p>
      <input 
      type="text" 
      id="email" 
      {...register("email")} 
      alt="Digite seu email cadastrado" 
      placeholder="E-mail"
      />
      <input 
      type="password" 
      id="" 
      {...register("password")}
      alt="Digite sua senha" 
      placeholder="Senha"
      />
      <button 
      type="submit"
      >
        Enviar
      </button>
    </form>
  )
}

export {Login};