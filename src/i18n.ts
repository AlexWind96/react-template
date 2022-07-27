import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationENG from './locales/eng/translation.json'

// the translations
const resources = {
  eng: {
    translation: translationENG,
  },
}

const language = localStorage.getItem('I18N_LANGUAGE')
if (!language) {
  localStorage.setItem('I18N_LANGUAGE', 'en')
}

const DEFAULT_LANGUAGE_CODE = process.env.REACT_APP_DEFAULT_LANGUAGE_CODE

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE_CODE,
  fallbackLng: DEFAULT_LANGUAGE_CODE,

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },

  debug: false,

  // react-i18next options
  react: {
    useSuspense: true,
  },
})

export default i18n
