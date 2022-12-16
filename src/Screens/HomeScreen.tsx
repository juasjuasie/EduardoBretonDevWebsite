import * as React from 'react';
import * as terminalImage from '../res/images/GNOMETerminalIcon.png';
import {useCurrentLang} from '../utils/useCurrentLang'
import {useLanguage} from '../utils/LanguageContextProvider'

const { Link } = require("react-router-dom");
console.log(terminalImage);
function HomeScreen() {
    const [lang, setLang] = useLanguage();
    return <div className="home">
        <ul className="menu-list">
            <Link to="/about">
                <li className="fade-in section about" >
                    {lang.about}
                </li>
            </Link>

            <Link to="/contact">
                <li className="fade-in section about" >
                    {lang.contact}
                </li>
            </Link>
            <Link to="/project">
                <li className="fade-in section about" >
                    {lang.projects}
                </li>
            </Link>
            <Link to="/question">
                <li className="fade-in section about" >
                    {lang.question}
                </li>
            </Link>
        </ul>
        <div className="home-main-image fade-in">
            <img src={terminalImage.default} alt={"Terminal"}/>
        </div>
    </div>
}

export default HomeScreen;
