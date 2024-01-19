import { ref } from 'vue';
import { defineStore } from 'pinia';

import { DEFAULT_THEME } from '@/shared/const/theme';
import { ThemeType } from '@/shared/types/theme';
import { LOCAL_STORAGE } from '@/shared/const/localStorage';
import { useI18n } from 'vue-i18n';
import type { LocaleType } from '@/shared/types/locale';
import { AVAILABLE_LOCALES } from '@/shared/const/locale';

export const useAppStore = defineStore('app', () => {
  const theme = ref(DEFAULT_THEME);
  const i18n = useI18n();

  document.body.className = theme.value;

  const setTheme = (newTheme: ThemeType) => {
    theme.value = newTheme;
    localStorage.setItem(LOCAL_STORAGE.THEME, theme.value);
    document.body.className = newTheme;
  };

  const setLocale = (newLocale: LocaleType) => {
    i18n.locale.value = newLocale;
    document.querySelector('html')?.setAttribute('lang', newLocale);
    localStorage.setItem(LOCAL_STORAGE.LOCALE, newLocale);
  };

  const nextTheme = () => {
    const newTheme = theme.value === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK;
    setTheme(newTheme);
  };

  const nextLocale = () => {
    const currentLocaleIndex = AVAILABLE_LOCALES.indexOf(i18n.locale.value as LocaleType);
    const newLocale = AVAILABLE_LOCALES[currentLocaleIndex + 1] || AVAILABLE_LOCALES[0];
    setLocale(newLocale);
  };

  return { theme, locale: i18n.locale, setTheme, setLocale, nextTheme, nextLocale };
});
