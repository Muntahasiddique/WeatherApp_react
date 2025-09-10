import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const THEME_KEY = 'theme';
function ThemeProvider({children}){
const [dark , setdark] = useState(true);

const saveThemetoLocalStorage = (theme) =>{
    localStorage.setItem(THEME_KEY,  JSON.stringify(theme))
}

useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY); 
    if (savedTheme !== null) {
        setdark(savedTheme === 'true'); 
        return;
    }

    const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setdark(isSystemThemeDark);
}, []);

    return (
        <ThemeContext.Provider value={{dark ,setdark , saveThemetoLocalStorage}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}
export default ThemeContext;