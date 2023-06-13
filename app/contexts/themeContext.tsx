import type { Dispatch, SetStateAction} from "react";
import { createContext, useContext, useState } from "react";

enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const prefersDarkMQ = '(prefers-color-scheme: dark)';

const getPreferredTheme = () => (window.matchMedia(prefersDarkMQ).matches ? Theme.DARK : Theme.LIGHT);

const ThemeProvider  = ({ children } : { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme | null>(() => {
    if (typeof window !== 'object') {
      return null;
    }

    return getPreferredTheme();
  });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// This runs the code with humble JS in a script tag before react so that the window exists.
const clientThemeCode = `
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let Josh know you're seeing this message? Thanks!",
    );
  } else {
    const themeString = 'theme-' + theme;
    cl.add(themeString);
  }
})();
`;

function NonFlashOfWrongThemeEls() {
  return <script dangerouslySetInnerHTML={{ __html: clientThemeCode }} />;
}

export { NonFlashOfWrongThemeEls, Theme, ThemeProvider, useTheme };
