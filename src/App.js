import React, {useState} from 'react';

import './App.css';
import ThemeToggler from './Components/ThemeToggler';
import Toggler from './Components/Toggler';
import ToggleSection from './Components/ToggleSection';
import ThemeContext from './Context/ThemeContext';

function App() {

  const themeHook = useState("light");

  return (
    <div className="App">
      <ThemeContext.Provider value={themeHook}>
          <div>
            <Toggler />
            <ToggleSection />
          </div>
      </ThemeContext.Provider>
      
     
    </div>
  );
} 

export default App;
