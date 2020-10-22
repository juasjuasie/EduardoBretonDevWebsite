import {useState} from 'react'
import {strings as frstrings} from '../res/lang/fr/strings'
import {strings as engstrings} from '../res/lang/eng/strings'

export const useCurrentLang = initialState => {
    if(initialState === 0){
        initialState = engstrings
    }
    const [currentlang, setLang] = useState(initialState);
    return {
        currentlang: currentlang,
        onClick: () => {
            if(currentlang === engstrings){
                setLang(frstrings)
            } else {
                setLang(engstrings)
            }
        }
    }
}
