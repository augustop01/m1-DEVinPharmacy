import {styled} from 'styled-components';

const PageHeader = styled.header`
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 255, 0.3);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin-bottom: 1rem;
  overflow: hidden;
`

const StyledUl = styled.nav`
margin: 0 3rem;
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const StyledA = styled.a`
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
&:last-of-type{
  margin-right: 1.75rem;
}
`

const StyledLi = styled.li`
  text-transform: uppercase;
  line-height: 1.35rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  -webkit-text-stroke: 1px blue;
  height: 4rem;
  color: rgb(200,200,255);
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  width: 10rem;
  &:hover {
    color: blue;
    text-shadow: 0px 0px 30px rgba(0,0,255,0.5);
    transition: 0.25s;
  }
`
const StyledImg = styled.span`
background: url("/img/pharm-logo-sm.png") no-repeat center;
background-size: 100% 90%;
width: 10rem;
height: 4rem;
height: 3.5;
`

export {PageHeader, StyledUl, StyledA, StyledLi, StyledImg}

//