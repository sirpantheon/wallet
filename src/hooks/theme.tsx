import { useContext, useState, createContext } from "react";
import  dark  from '../Styles/themes/dark';
import  light  from '../Styles/themes/light';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  },
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export function ThemeProviderToggle( {children} ) {
  const [theme, setTheme] = useState<ITheme>(dark);
  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light)
    } else {
      setTheme(dark);
    }
  }

  return (
    <ThemeContext.Provider value={{toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext)
  return context
}