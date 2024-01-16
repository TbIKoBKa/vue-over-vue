<script setup lang="ts">
import { RouterLink } from 'vue-router';

import Logo from '@/shared/assets/images/logo.png';
import { Button } from '@/shared/ui/Button';
import { Link } from '../Link';
import { Theme } from '../Theme';
</script>

<template>
  <div class="header">
    <div>
      <RouterLink to="/">
        <img :src="Logo" width="64" height="64" />
      </RouterLink>
    </div>
    <nav class="header-nav">
      <Link to="/">Homepage</Link>
      <Link to="/todo-list">Todo List</Link>
    </nav>
    <div class="header-right">
      <Theme />
      <Button class-name="header-right-connect-btn" color="inverted-primary" centered
        >Connect</Button
      >
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

.header-right-connect-btn {
  max-width: 200px;
}
</style>
