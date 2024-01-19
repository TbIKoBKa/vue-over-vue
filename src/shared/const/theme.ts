import { ThemeType } from '../types/theme';
import { LOCAL_STORAGE } from './localStorage';

export const FALLBACK_THEME = ThemeType.LIGHT;
export const DEFAULT_THEME = (localStorage.getItem(LOCAL_STORAGE.THEME) ||
  FALLBACK_THEME) as ThemeType;
