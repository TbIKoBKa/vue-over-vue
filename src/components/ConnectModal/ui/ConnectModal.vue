<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useConnect } from 'use-wagmi';
import { useToast } from 'vue-toast-notification';
import type { Connector, CreateConnectorFn } from '@wagmi/core';

import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import { logoById } from '../const/logo';
import type { IConnectModalProps, IConnectModalEmits } from '../types/connectModal';

defineProps<IConnectModalProps>();
const emit = defineEmits<IConnectModalEmits>();

const { t } = useI18n();

const toast = useToast();

const { connect, connectors } = useConnect({
  mutation: {
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => emit('close')
  }
});

const onCloseHandler = () => emit('close');

const onConnectHandler = (connector: CreateConnectorFn | Connector) => {
  connect({
    connector
  });
};

const uniqueConnectors = computed(() => {
  return connectors.value.reduce(
    (a, c) => (a.some((i) => i.name === c.name) ? a : a.concat(c)),
    [] as Connector[]
  );
});
</script>

<template>
  <Modal :open="open" :title="t('modals.connect.title')" @close="onCloseHandler">
    <div class="connectors">
      <Button
        class="connector-btn"
        variant="unstyled"
        fluid
        centered
        v-for="(c, i) in uniqueConnectors"
        :key="i"
        @click="onConnectHandler(c)"
      >
        <component :is="logoById[c.id]" class="connector-logo" />
      </Button>
    </div>
  </Modal>
</template>

<style scoped lang="scss">
.connectors {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.connector-btn {
  border: 0;
  outline: 0;
  height: 60px;
}

.connector-logo {
  height: 30px;
  width: auto;
}
</style>
