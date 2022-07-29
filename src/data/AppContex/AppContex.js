import { createContext, useState } from "react";
import { ThemeContext } from "styled-components";

export ThemeContext = createContext();
export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState()
    return (

        <ThemeContext.Provider value={theme}>
            {props.children}

        </ThemeContext.Provider>


    )
}