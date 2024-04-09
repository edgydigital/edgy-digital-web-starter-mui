import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import czCommon from './common.json'

export enum ResourceType {
  COMMON = 'common'
}

const resources = {
  cz: {
    common: czCommon
  }
}

i18n.use(initReactI18next).init({
  lng: 'cz',
  fallbackLng: 'cz',
  resources,
  debug: true, //Just for testing missing key output,
  returnNull: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
