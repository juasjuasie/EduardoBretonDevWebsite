import React from 'react';
import {Link } from 'react-router-dom'
import {useLanguage} from '../utils/LanguageContextProvider'
function QuestionScreen() {
    const [lang, setLang] = useLanguage(); 
    return <div className="question-title-section">
        <div className="fade-in text-centered">
            {lang.question}
        </div>
        <div className="question-text fade-in text-centered">
            {lang.maintenanceComingSoon}
        </div> 
        <Link to="/">
                <p className="button fixed-bottom" >
                    {lang.goBack}
                </p>
        </Link>
    </div>
}

export default QuestionScreen;