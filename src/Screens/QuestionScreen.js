import React from 'react';
import {useLanguage} from '../utils/LanguageContextProvider'
function QuestionScreen() {
    const [lang, setLang] = useLanguage(); 
    return <div>
        <div className="project-title-section fade-in text-centered">
            {lang.question}
        </div>
        <div className="project-text fade-in text-centered">
            {lang.maintenanceComingSoon}
        </div> 
    </div>
}

export default QuestionScreen;