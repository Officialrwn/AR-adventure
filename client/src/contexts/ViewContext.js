import { createContext, useContext } from "react";

const ViewContext = createContext();
export const usePage = () => useContext(ViewContext);

export const ViewProvider = ({ children }) => {
  const value = {};

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};
