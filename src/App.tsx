import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeScreen from  './Screens/HomeScreen'
import AboutScreen from  './Screens/AboutScreen'
import ContactScreen from  './Screens/ContactScreen'
import ProjectScreen from  './Screens/ProjectScreen'
import QuestionScreen from  './Screens/QuestionScreen'
import './App.css';
import {useLanguage} from './utils/LanguageContextProvider'
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
              <button className="button" onClick={() => handleLanguageChange()}>{lang.traduction} </button>
            </div>
            <div>

            </div>
          </header>
          <main className="main">
            <div className="content">
              <Route path="/" exact={true} component={HomeScreen} />
              <Route path="/about" component={AboutScreen}/>
              <Route path="/contact" component={ContactScreen}/>
              <Route path="/project" component={ProjectScreen}/>
              <Route path="/question" component={QuestionScreen}/>
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
