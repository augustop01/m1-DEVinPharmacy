import {PageHeader, StyledA, StyledLi, StyledUl,StyledImg} from './styled'

function Header() {
  return(
    <PageHeader>
      <StyledUl>
        <StyledA href='/'>
          <StyledLi>Início</StyledLi>
        </StyledA>
        <StyledA href='/medicamentos'>
          <StyledLi>Medicamentos</StyledLi>
        </StyledA>
        <StyledA href='/'>
          <StyledImg/>
        </StyledA>
        <StyledA href='/cadastro-farmacia'>
          <StyledLi>Nova Farmácia</StyledLi>
        </StyledA>
        <StyledA href='/cadastro-medicamento'>
          <StyledLi>Novo Medicamento</StyledLi>
        </StyledA>
      </StyledUl>
    </PageHeader>
  )
}

export {Header}

//