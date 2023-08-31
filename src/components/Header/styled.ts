import {styled} from 'styled-components';
import { css } from "styled-components";


export const StyledUl = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 3rem;
`
export const StyledA = styled.a`
  box-sizing: border-box;
  background-color: rgb(65, 149, 155);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  width: 100%;
&:hover{
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.2s;
}
`

export const StyledLi = styled.li`
box-sizing: border-box;
  text-transform: uppercase;
  line-height: 1.35rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #caedfc;
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
export const StyledImg = styled.span`
background: url("/img/pharm-logo-sm.png") no-repeat center;
background-size: 50% 95%;
width: 100%;
height: 4rem;
height: 3.5;
`


const lightMode = css`
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

const darkMode = css`
position: relative;
  box-sizing: border-box;
  background: rgb(22, 79, 82);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  overflow: hidden;
  top: 0;
  z-index: 999;
  ${StyledA}{
    background: rgb(22, 79, 82);
    &:hover{
      background-color: rgba(0, 0, 0, 0.1);
    }
  ${StyledLi}{
    color:#a5cfd2;
  }
  }
`

export const PageHeader = styled.header<{pagetheme: string}>`
${(props) => props.pagetheme === 'light' && lightMode}
${(props) => props.pagetheme === 'dark' && darkMode}
`

export const ThemeButton = styled.button<{pagetheme: string}>`
border: none;
background-color: transparent;
background-image: ${props => props.pagetheme === 'light' ? "url('img/moon-fill.svg')" : "url('img/sun-fill.svg')"};
background-size: 80%;
background-repeat: no-repeat;
background-position: center;
width: 2.5rem;
height: 2.5rem;
border-radius: 50%;
position: absolute;
left: 0.3rem;
&:hover{
  cursor: pointer;
  scale: 1.1;
}
`
export const LogoutButton = styled.button`
border: none;
background-color: transparent;
background-image: url('img/logout-circle-line.svg');
background-size: 80%;
background-repeat: no-repeat;
background-position: center;
position: absolute;
right: 0.3rem;
width: 2rem;
height: 2rem;
&:hover{
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.25);
  cursor: pointer;
  scale: 1.1;
}
`

