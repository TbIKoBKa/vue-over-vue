<script setup lang="ts">
import { Button } from '@/shared/ui/Button';
import { useI18n } from 'vue-i18n';
import { AVAILABLE_LOCALES } from '@/shared/const/locale';
import { LOCAL_STORAGE } from '@/shared/const/localStorage';

const { locale } = useI18n();

const toggleLocale = () => {
  const currentLocaleIndex = AVAILABLE_LOCALES.indexOf(locale.value);
  const newLocale = AVAILABLE_LOCALES[currentLocaleIndex + 1] || AVAILABLE_LOCALES[0];
  locale.value = newLocale;
  document.querySelector('html')?.setAttribute('lang', newLocale);
  localStorage.setItem(LOCAL_STORAGE.LOCALE, newLocale);
};
</script>
<template>
  <Button @click="toggleLocale" color="inverted-primary" icon>
    {{ locale.toUpperCase() }}
  </Button>
</template>
