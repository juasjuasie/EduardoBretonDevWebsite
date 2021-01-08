import React from 'react';
import {useLanguage} from '../utils/LanguageContextProvider'
function ContactScreen() {
    const [lang, setLang] = useLanguage(); 
    return <div>
        <div className="contact-title-section fade-in text-centered">
            {lang.contact}
        </div>
        <div className="contact-text fade-in text-centered">
            {lang.contactMain}
            {lang.contactTel}
        </div> 
    </div>
}

export default ContactScreen;