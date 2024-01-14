<script setup lang="ts"></script>
<template lang="">
  <div class="page-container">
    <div class="page-wrapper">
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: var(--content-width-xl);
  padding: 40px 20px;
}
</style>
