import i18n from './init';

/**
 * interface for translation operations
 */
export interface ITranslate {
    /**
     *  translate a key to a string
     * @param key  key to translate
     * @returns   translated string
     */
    translate: (key: string) => string;
    /**
     *  change language of the application
     * @param lang change language
     * @returns  void
     */
    changeLanguage: (lang: string) => void;
}

/**
 *  hook for translation operations 
 * @returns ITranslate
 */
export const useTranslate = ():ITranslate => {
    const translate = (key: string) => {
        let result = i18n.t(key);
        if(result === ''){
            return `missing translation for ${key}`
        } 
        return result;
    }

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    return {
        translate,
        changeLanguage
    }
}