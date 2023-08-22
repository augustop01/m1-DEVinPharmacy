import {styled} from 'styled-components';

const PageHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 3rem;
  border: 2px grey;
  border-style: dashed;
  margin-bottom: 2rem;
`

const StyledUl = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 100%;
`
const StyledA = styled.a`
  margin: 2rem;
`

const StyledLi = styled.li`
  background: black;
  color: white;
  text-decoration: none;
  border: 2px grey solid;
  padding: 0.5rem;
  &:hover {
    background: grey;
  }
`

export {PageHeader, StyledUl, StyledA, StyledLi}