import { LocaleType } from '../types/locale';
import { LOCAL_STORAGE } from './localStorage';

export const FALLBACK_LOCALE = LocaleType.EN;
export const DEFAULT_LOCALE = (localStorage.getItem(LOCAL_STORAGE.LOCALE) ||
  navigator.language ||
  FALLBACK_LOCALE) as LocaleType;
export const AVAILABLE_LOCALES = [LocaleType.EN, LocaleType.RU];
