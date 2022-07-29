import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ENG } from './locales/eng/translations'

// the translations
const resources = {
  en: {
    translation: ENG,
  },
}

const DEFAULT_LANGUAGE_CODE = process.env.REACT_APP_DEFAULT_LANGUAGE_CODE

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE_CODE,
  fallbackLng: DEFAULT_LANGUAGE_CODE,
  supportedLngs: ['en'],
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
