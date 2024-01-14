<script setup lang="ts">
import { RouterLink, type RouterLinkProps } from 'vue-router';
import { Text } from '@/shared/ui/Text';
defineProps<RouterLinkProps>();
</script>
<template>
  <RouterLink class="link" v-bind="$props">
    <Text color="inverted-primary"><slot /></Text>
  </RouterLink>
</template>
<style scoped lang="scss">
.link {
  display: flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 8px;

  p {
    transition: color 0.3s ease;
  }

  &.router-link-active,
  &:hover {
    p {
      color: var(--secondary-color);
    }
  }
}
</style>
