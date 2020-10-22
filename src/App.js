import React, { useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeScreen from  './Screens/HomeScreen'
import AboutScreen from  './Screens/AboutScreen'
import './App.css';
import { useCurrentLang } from './utils/useCurrentLang'
import {strings as engstrings} from './res/lang/eng/strings'
import {LanguageProvider, useLanguage} from './utils/LanguageContextProvider'

function App() {
  const [lang, setLang] = useLanguage(); 
  const handleLanguageChange = () => {
    if (lang.lang === 'eng'){
      setLang('fr')
    } else {
      setLang('en')
    }
  }
  return (  
      <BrowserRouter>
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <Link to="/" >
                  Eduardo Breton
              </Link>
            </div>
            <div className="header-side">
              {lang.subtitle}
            </div>
            <div className="header-right">
              <button onClick={() => handleLanguageChange()}>{lang.traduction} </button>
            </div>
            <div>

            </div>
          </header>
          <main className="main">
            <div className="content">
              <Route path="/" exact={true} component={HomeScreen} />
              <Route path="/about" component={AboutScreen}/>
            </div>

          </main>
          <footer className="footer">
            &#169; 2020 Eduardo Breton
          </footer>
        </div>
      </BrowserRouter>
   
  );
}

export default App;
