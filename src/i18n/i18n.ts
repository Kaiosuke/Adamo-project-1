import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import HOME_EN from '@/locales/en/home.json'
import ABOUT_EN from '@/locales/en/about.json'
import TOUR_EN from '@/locales/en/tour.json'
import HOTEL_EN from '@/locales/en/hotel.json'
import CONTACT_EN from '@/locales/en/contact.json'
import SEARCH_EN from '@/locales/en/search.json'
import AUTH_EN from '@/locales/en/auth.json'
import CHECKOUT_EN from '@/locales/en/checkout.json'
import HEADER_EN from '@/locales/en/header.json'
import DETAIL_EN from '@/locales/en/detail.json'
import BILL_EN from '@/locales/en/bill.json'

import HOME_VI from '@/locales/vi/home.json'
import ABOUT_VI from '@/locales/vi/about.json'
import TOUR_VI from '@/locales/vi/tour.json'
import HOTEL_VI from '@/locales/vi/hotel.json'
import CONTACT_VI from '@/locales/vi/contact.json'
import SEARCH_VI from '@/locales/vi/search.json'
import AUTH_VI from '@/locales/vi/auth.json'
import CHECKOUT_VI from '@/locales/vi/checkout.json'
import HEADER_VI from '@/locales/vi/header.json'
import DETAIL_VI from '@/locales/vi/detail.json'
import BILL_VI from '@/locales/vi/bill.json'

export const resources = {
  en: {
    home: HOME_EN,
    about: ABOUT_EN,
    tour: TOUR_EN,
    hotel: HOTEL_EN,
    contact: CONTACT_EN,
    search: SEARCH_EN,
    auth: AUTH_EN,
    checkout: CHECKOUT_EN,
    header: HEADER_EN,
    detail: DETAIL_EN,
    bill: BILL_EN
  },
  vi: {
    home: HOME_VI,
    about: ABOUT_VI,
    tour: TOUR_VI,
    hotel: HOTEL_VI,
    contact: CONTACT_VI,
    search: SEARCH_VI,
    auth: AUTH_VI,
    checkout: CHECKOUT_VI,
    header: HEADER_VI,
    detail: DETAIL_VI,
    bill: BILL_VI
  }
}

export const locales = {
  en: 'English',
  vi: 'Tiếng Việt'
}

export const defaultNS = 'home'

const ns = ['home', 'about', 'tour', 'hotel', 'contact', 'search', 'header', 'detail', 'bill']

i18n.use(initReactI18next).init({
  resources,
  ns,
  fallbackLng: 'en',
  defaultNS,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
