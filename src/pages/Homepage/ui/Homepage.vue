<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';

const { t } = useI18n();
</script>
<template>
  <Page>
    <Text size="xxl">{{ t('header.links.homepage') }}</Text>
  </Page>
</template>
<style lang="scss"></style>
