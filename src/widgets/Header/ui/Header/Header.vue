<script setup lang="ts">
import { RouterLink } from 'vue-router';

import Logo from '@/shared/assets/images/logo.png';
import { Button } from '@/shared/ui/Button';
import { Link } from '../Link';
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
    <div class="header-connect">
      <Button class-name="header-connect-btn" color="inverted-primary" centered>Connect</Button>
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
  background-color: var(--inverted-bg-color);
}

.header-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.header-connect {
  display: flex;
  justify-content: flex-end;
}

.header-connect-btn {
  max-width: 200px;
}
</style>
