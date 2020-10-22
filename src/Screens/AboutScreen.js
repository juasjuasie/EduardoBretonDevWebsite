import React from 'react';
import ReactDOM from 'react-dom'
function AboutScreen() {

    var imageCorpList = [];
    var imageLangList = [];
    var imageToolList = [];
    const importAll = (r) =>{
            return r.keys().map(r);
    }
    imageCorpList = importAll(require.context('../res/images/corplogos/', false, /\.(png|jpe?g|svg)$/));
    imageLangList = importAll(require.context('../res/images/proglogos/', false, /\.(png|jpe?g|svg)$/));
    imageToolList = importAll(require.context('../res/images/progtoollogos/', false, /\.(png|jpe?g|svg)$/));
    return <div>
        <div className="about-monologue">

        </div>
        <div className="image-show">
            <ul className="corp-list">
                {imageCorpList.map(image => (
                <li>
                    <img src={image}></img>
                </li>   
                ))}
            </ul>
            <ul className="lang-list">
                {imageLangList.map(image => (
                <li>
                    <img src={image}></img>
                </li>   
                ))}
            </ul>
            <ul className="tool-list">
                {imageToolList.map(image => (
                <li>
                    <img src={image}></img>
                </li>   
                ))}
            </ul>
        </div>
    </div>
}

export default AboutScreen;