import React from 'react';
import {Link } from 'react-router-dom'
import {useLanguage} from '../utils/LanguageContextProvider'
function AboutScreen() {
    const [lang, setLang] = useLanguage(); 
    var imageCorpList = [];
    var imageLangList = [];
    var imageEducList = [];
    const importAll = (r) =>{
            return r.keys().map(r);
    }
    imageCorpList = importAll(require.context('../res/images/corplogos/', false, /\.(png|jpe?g|svg)$/));
    imageLangList = importAll(require.context('../res/images/proglogos/', false, /\.(png|jpe?g|svg)$/));
    imageEducList = importAll(require.context('../res/images/educlogos/', false, /\.(png|jpe?g|svg)$/));
    return <div>
        <div className="about-monologue fade-in text-centered">
            {lang.aboutMain}
        </div>
        <div className="about-corp-text fade-in text-centered">
            {lang.aboutEnterprise}
        </div>
        <div className="image-show">
            <ul className="corp-list logo-list">
                {imageCorpList.map(image => (
                <li className="fade-in">
                    <img className="logo" src={image}></img>
                </li>   
                ))}
            </ul>
        </div>
        <div className="about-prog-text fade-in text-centered">
            {lang.aboutProg}
        </div>
        <div className="image-show">
            <ul className="prog-list logo-list">
                {imageLangList.map(image => (
                <li className=" fade-in">
                    <img className="logo" src={image}></img>
                </li>   
                ))}
            </ul>
        </div>
        <div className="about-tool-text fade-in text-centered">
            {lang.aboutSchool}
        </div>
        <div className="image-show text-centered">
            <ul className="tool-list logo-list">
                {imageEducList.map(image => (
                <li className="fade-in">
                    <img className="logo" src={image}></img>
                </li>   
                ))}
            </ul>
        </div>
        <Link to="/">
                <p className="button fixed-bottom" >
                    {lang.goBack}
                </p>
        </Link>
    </div>
}

export default AboutScreen;