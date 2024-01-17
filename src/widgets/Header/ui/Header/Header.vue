<script setup lang="ts">
import { RouterLink } from 'vue-router';

import Logo from '@/shared/assets/images/logo.png';
import { Link } from '../Link';
import { Theme } from '../Theme';
import { Connect } from '../Connect';
import { Locale } from '../Locale';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="header">
    <div>
      <RouterLink to="/">
        <img :src="Logo" width="64" height="64" />
      </RouterLink>
    </div>
    <nav class="header-nav">
      <Link to="/">{{ t('header.links.homepage') }}</Link>
      <Link to="/todo-list">{{ t('header.links.todolist') }}</Link>
    </nav>
    <div class="header-right">
      <Locale />
      <Theme />
      <Connect />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  height: var(--navbar-height-l);
  padding: 0 20px;
  background-color: var(--secondary-bg-color);
}

.header-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.header-right {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
