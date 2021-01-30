import React from 'react';
import {Link } from 'react-router-dom'
import {useLanguage} from '../utils/LanguageContextProvider'
function ProjectScreen() {
    const [lang, setLang] = useLanguage(); 
    return <div>
        <div className="project-title-section fade-in text-centered">
            {lang.projects}
        </div>
        <div className="project-text fade-in text-centered">
            {lang.projectsMain}
        </div> 
        <div className="project-table fade-in text-centered">
            {lang.projectsList}
        </div> 
        <Link to="/">
                <p className="button fixed-bottom" >
                    {lang.goBack}
                </p>
        </Link>
    </div>
}

export default ProjectScreen;