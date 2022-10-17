import { createContext } from "react";

export const FooterLogContext = createContext({
  setInfo: () => null,
  info: []
})