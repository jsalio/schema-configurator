import i18next from 'i18next';
import es from './langs/es.json'
import en from './langs/en.json'

i18next.init({
  lng: 'es', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: en
    },
    es: {
        translation: es
    }
  }
});


export default i18next;