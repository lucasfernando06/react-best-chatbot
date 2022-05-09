import React, { createContext } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
