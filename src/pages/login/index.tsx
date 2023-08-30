import { useForm } from "react-hook-form";
import { useApp } from "../../hooks/useApp";
import { LoginProps } from "./interfaces";
import * as Styled from './styles'

function Login() {
  const {register, handleSubmit} = useForm();
  const {setValue} = useApp();
  const {theme} = useApp();

function emailRegex(input: string) {
  const regex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i) 
  return regex.test(input)
}

function pswRegex(input: string) {
  const regex = new RegExp(/^(?=.*[a-z])(?=.*[0-9])[a-z\d]{8,20}$/i)
  return regex.test(input)
}

function OnSubmit(data: LoginProps) {
  const email = String(data.email)
  const password = String(data.password)
  if (email.length == 0) {
    return
  }
  if (emailRegex(`${email}`)) {
    if(pswRegex(`${password}`) && password.length > 0) {
      setValue(data as string)
      return
    }
    alert("A senha deve conter de 8 a 20 caracteres, tendo pelo menos uma letra e um número.")
    return
  }
alert("O e-mail digitado não é válido.\nEx: email@email.com")
}

  return(
    <Styled.MainStyled pagetheme={theme}>
      <Styled.FormStyled onSubmit={handleSubmit(OnSubmit)}>
        <Styled.H3Styled>Faça seu login:</Styled.H3Styled>
        <Styled.HrStyled/>
        <Styled.InputStyled 
        type="text" 
        id="email" 
        {...register("email")} 
        alt="Digite seu email cadastrado" 
        placeholder="E-mail"
        />
        <Styled.InputStyled 
        type="password" 
        id="" 
        {...register("password")}
        alt="Digite sua senha" 
        placeholder="Senha"
        />
        <Styled.ButtonStyled 
        type="submit"
        >
          Entrar
        </Styled.ButtonStyled>
      </Styled.FormStyled>
    </Styled.MainStyled>
  )
}

export {Login};