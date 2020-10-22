import React from 'react'
import {strings as frstrings} from '../res/lang/fr/strings'
import {strings as engstrings} from '../res/lang/eng/strings'

const lang = {
  // in this way, you could dynamically add lang
  // later on which worrying about if-elses in your component
  en: engstrings,
  fr: frstrings,
}

const langDict = (key) => lang[key]

const LanguageContext = React.createContext(null);

function LanguageProvider({ initialState = 'en', children }) {
    const [lang, setLang] = React.useState(initialState);
  
    return (
      <LanguageContext.Provider value={[langDict(lang), setLang]}>
        {children}
      </LanguageContext.Provider>
    )
  }

function useLanguage() {
  return React.useContext(LanguageContext);
}

export {LanguageProvider, useLanguage}