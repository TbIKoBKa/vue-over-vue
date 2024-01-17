import { createI18n } from 'vue-i18n';
import { type I18nOptions } from 'vue-i18n';

import { LOCAL_STORAGE } from '../../const/localStorage';
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '../../const/locale';
import en from './locales/en.json';
import ru from './locales/ru.json';

const defaultLocale = localStorage.getItem(LOCAL_STORAGE.LOCALE) || navigator.language;

const defaultOptions: I18nOptions = {
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: DEFAULT_LOCALE,
  availableLocales: AVAILABLE_LOCALES,
  allowComposition: true,
  globalInjection: true,
  messages: {
    en,
    ru
  }
};

export const i18n = createI18n(defaultOptions);
