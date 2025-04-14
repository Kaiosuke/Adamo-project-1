import HOME_EN from "@/locales/en/home.json";
import ABOUT_EN from "@/locales/en/about.json";
import TOUR_EN from "@/locales/en/tour.json";
import HOTEL_EN from "@/locales/en/hotel.json";
import CONTACT_EN from "@/locales/en/contact.json";
import SEARCH_EN from "@/locales/en/search.json";

import HOME_VI from "@/locales/vi/home.json";
import ABOUT_VI from "@/locales/vi/about.json";
import TOUR_VI from "@/locales/vi/tour.json";
import HOTEL_VI from "@/locales/vi/hotel.json";
import CONTACT_VI from "@/locales/vi/contact.json";
import SEARCH_VI from "@/locales/vi/search.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const locales = {
  en: "English",
  vi: "Tiếng Việt",
};

export const resources = {
  en: {
    home: HOME_EN,
    about: ABOUT_EN,
    tour: TOUR_EN,
    hotel: HOTEL_EN,
    contact: CONTACT_EN,
    search: SEARCH_EN,
  },
  vi: {
    home: HOME_VI,
    about: ABOUT_VI,
    tour: TOUR_VI,
    hotel: HOTEL_VI,
    contact: CONTACT_VI,
    search: SEARCH_VI,
  },
};

export const defaultNS = "home";

i18n.use(initReactI18next).init({
  resources,
  ns: ["home", "about", "tour", "hotel", "contact", "search"],
  fallbackLng: "en",
  defaultNS,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
