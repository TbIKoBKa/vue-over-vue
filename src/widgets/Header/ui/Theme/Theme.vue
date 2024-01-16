<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import { Button } from '@/shared/ui/Button';
import { Moon, Sun } from '@/shared/ui/icons';
import { LOCAL_STORAGE } from '@/shared/config/localStorage';
import { DEFAULT_THEME } from '@/shared/config/theme';
import { ThemeType } from '@/shared/types/theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE.THEME) || DEFAULT_THEME;
const theme = ref(defaultTheme);

watchEffect(() => {
  document.body.className = theme.value;
});

const toggleTheme = () => {
  theme.value = theme.value === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK;
  localStorage.setItem(LOCAL_STORAGE.THEME, theme.value);
};

const icon = computed(() => {
  return theme.value === ThemeType.DARK ? Moon : Sun;
});
</script>
<template>
  <Button @click="toggleTheme" color="inverted-primary" icon>
    <component :is="icon" width="24px" height="24px" />
  </Button>
</template>
<style scoped lang="scss"></style>
