import * as Styled from './styled'
import { useApp } from '../../hooks/useApp';


function Header() {
  const {theme, toggleTheme, logout} = useApp();

  function doLogout(){
    const toDo = confirm('Você será redirecionado para a tela de Login.');
    if(toDo){
      return logout()
    }
    return
  }

  return(
    <Styled.PageHeader  pagetheme={theme}>
      <Styled.ThemeButton onClick={toggleTheme} pagetheme={theme}/>
      <Styled.StyledUl>
        <Styled.StyledA href='/'>
          <Styled.StyledLi>FARMÁCIAS</Styled.StyledLi>
        </Styled.StyledA>
        <Styled.StyledA href='/medicamentos'>
          <Styled.StyledLi>Medicamentos</Styled.StyledLi>
        </Styled.StyledA>
        <Styled.StyledA href='/cadastro-farmacia'>
          <Styled.StyledLi>Nova Farmácia</Styled.StyledLi>
        </Styled.StyledA>
        <Styled.StyledA href='/cadastro-medicamento'>
          <Styled.StyledLi>Novo Medicamento</Styled.StyledLi>
        </Styled.StyledA>
      </Styled.StyledUl>
      {localStorage.getItem('user') != '{}' 
      ? <Styled.LogoutButton onClick={doLogout}/>
      : ""
      }
    </Styled.PageHeader>
  )
}

export {Header}

//