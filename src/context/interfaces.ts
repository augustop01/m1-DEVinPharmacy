import { ReactNode } from "react";
import { LoginProps } from "../pages/login/interfaces";
export interface ReactProps {
  children: ReactNode
}
export interface ContextProps {
  logout: () => void;
  setValue: (value: string) => void;
  user: LoginProps;
  value: LoginProps | null;
}
