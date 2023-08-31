import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ContextProps, ReactProps } from "./interfaces";
import { useTheme } from "../hooks/useTheme";


const AppContext = createContext({} as ContextProps);

function AppProvider({children}: ReactProps) {
  const {value, setValue} = useLocalStorage('user', {});
  const [user, setUser] = useState({});
  const {theme, toggleTheme, setMode} = useTheme();

  useEffect(() => {
    if(value) {
      setUser(value)
    }
  }, [setUser, value])

  const logout = () => {
    setValue({})
  }

  useEffect(() => {
    const load = async () => {
      const current = await localStorage.getItem('theme')
      if(current === 'null') {
        return setMode('light')
      }
      return setMode(current!)
    }
    load()
  }, [toggleTheme])


  return (
    <AppContext.Provider value={{value, setValue, user, logout, toggleTheme, theme}}>
      {children}
    </AppContext.Provider>
  )

}

export {AppProvider, AppContext};