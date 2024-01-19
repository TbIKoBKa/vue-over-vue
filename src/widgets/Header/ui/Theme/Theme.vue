<script setup lang="ts">
import { computed } from 'vue';
import { Button } from '@/shared/ui/Button';
import { Moon, Sun } from '@/shared/ui/icons';
import { ThemeType } from '@/shared/types/theme';
import { useAppStore } from '@/shared/stores/app';

const appStore = useAppStore();

const icon = computed(() => {
  return appStore.theme === ThemeType.DARK ? Moon : Sun;
});
</script>
<template>
  <Button @click="appStore.nextTheme" color="inverted-primary" icon>
    <component :is="icon" width="24px" height="24px" />
  </Button>
</template>
