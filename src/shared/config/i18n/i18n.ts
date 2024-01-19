import { createI18n } from 'vue-i18n';
import { type I18nOptions } from 'vue-i18n';

import { AVAILABLE_LOCALES, FALLBACK_LOCALE, DEFAULT_LOCALE } from '../../const/locale';
import en from './locales/en.json';
import ru from './locales/ru.json';

const defaultOptions: I18nOptions = {
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  availableLocales: AVAILABLE_LOCALES,
  allowComposition: true,
  globalInjection: true,
  messages: {
    en,
    ru
  }
};

export const i18n = createI18n(defaultOptions);
