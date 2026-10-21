import { createContext, useContext, useState } from "react";



const ThemeContext = createContext();

function ThemeProvider({ children }) {
  
  const [theme, setTheme] = useState("light");

  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


function Theme() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}


function Home() {
  // Get theme and function from Context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <h1>Color Theme Switcher</h1>

        <p>
          Current Theme: <strong>{theme}</strong>
        </p>

        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </div>
  );
}

export default Theme;
