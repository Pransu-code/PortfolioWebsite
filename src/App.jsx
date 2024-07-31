// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import useDarkMode from 'use-dark-mode';
// import AppContext from './AppContext';
// import MainApp from './MainApp';
// import GlobalStyles from './theme/GlobalStyles';
// import { lightTheme, darkTheme } from './theme/themes';
// // import 'matchmedia-polyfill';
// // import 'matchmedia-polyfill/matchMedia.addListener';

// function App() {
//   window.matchMedia = null;
//   const darkMode = useDarkMode(true);

//   return (
//     <AppContext.Provider value={{ darkMode }}>
//       <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
//         <GlobalStyles />
//         <div className="App">
//           <BrowserRouter>
//             <MainApp />
//           </BrowserRouter>
//         </div>
//       </ThemeProvider>
//     </AppContext.Provider>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';

function App() {
  // Initialize dark mode state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a preferred theme
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  // Update local storage and handle side effects
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
