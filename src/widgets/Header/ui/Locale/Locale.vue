<script setup lang="ts">
import { useAppStore } from '@/shared/stores/app';
import { Button } from '@/shared/ui/Button';

const appStore = useAppStore();
</script>
<template>
  <Button @click="appStore.nextLocale" color="inverted-primary" icon>
    {{ appStore.locale.toUpperCase() }}
  </Button>
</template>
