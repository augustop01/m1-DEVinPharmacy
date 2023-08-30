import * as Styled from './styled'
import { useApp } from '../../hooks/useApp';


function Header() {
  const {theme, toggleTheme} = useApp();

  console.log(theme);

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
    </Styled.PageHeader>
  )
}

export {Header}

//