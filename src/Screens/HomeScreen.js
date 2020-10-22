import React from 'react';
import terminalImage from '../res/images/GNOMETerminalIcon.png';
import {useCurrentLang} from '../utils/useCurrentLang'
import {useLanguage} from '../utils/LanguageContextProvider'

const { Link } = require("react-router-dom");

function HomeScreen() {
    const [lang, setLang] = useLanguage(); 
    return <div className="home">
        <ul className="menu-list">
            <li className="fade-in section about" >
                <div>
                    <Link to="/about">{lang.about}</Link>
                </div>
            </li>
            <li className="fade-in section contacts ">
                <div>
                    <Link to="/about">{lang.contact}</Link>   
                </div>
            </li>
            <li className="fade-in section projects">
                <div>
                    <Link to="/about">{lang.projects}</Link>
                </div>
            </li>
            <li className="fade-in section question-box">
                <div >
                    <Link to="/about">{lang.question}</Link>   
                </div>
            </li>
        </ul>
        <div className="home-main-image fade-in">
            <img src={terminalImage} />
        </div>
    </div>
}

export default HomeScreen;