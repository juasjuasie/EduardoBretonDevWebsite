import * as React from 'react';
import {Link } from 'react-router-dom'
import {useLanguage} from '../utils/LanguageContextProvider'
function ContactScreen() {
    const [lang, setLang] = useLanguage();
    return <div>
        <div className="contact-title-section fade-in">
            {lang.contact}
        </div>
        <div className="contact-text fade-in ">
            {lang.contactMain}
            {lang.contactTel}
        </div>
        <Link to="/">
                <p className="button fixed-bottom" >
                    {lang.goBack}
                </p>
        </Link>
    </div>
}

export default ContactScreen;
