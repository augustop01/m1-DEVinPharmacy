import { useContext } from "react";
import { AppContext } from "../context";

function useApp() {
  const context = useContext(AppContext);

  if(!context){
    throw new Error("A aplicação não está como 'children' do AppProvider em 'App.tsx'.")
  }

  return context;
}

export {useApp};