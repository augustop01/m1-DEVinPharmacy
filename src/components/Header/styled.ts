import {styled} from 'styled-components';

const PageHeader = styled.header`
  position: relative;
  box-sizing: border-box;
  background: rgb(65, 149, 155);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  overflow: hidden;
  top: 0;
  z-index: 999;
`

const StyledUl = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 3rem;
`
const StyledA = styled.a`
box-sizing: border-box;
background-color: rgb(65, 149, 155);
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
pointer-events: none;
width: 100%;
&:hover{
  background-color: rgba(255, 255, 255, 0.05);
  transition: 0.2s;
}
`

const StyledLi = styled.li`
box-sizing: border-box;
  text-transform: uppercase;
  line-height: 1.35rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  /* -webkit-text-stroke: 1px blue; */
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0 5rem;
  width: 10rem;
  padding: 5rem;
  pointer-events: all;
  &:hover {
    cursor: pointer;
  }
`
const StyledImg = styled.span`
background: url("/img/pharm-logo-sm.png") no-repeat center;
background-size: 50% 95%;
width: 100%;
height: 4rem;
height: 3.5;
`

export {PageHeader, StyledUl, StyledA, StyledLi, StyledImg}

//