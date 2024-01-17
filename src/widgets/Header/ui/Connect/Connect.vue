<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAccount, useDisconnect } from 'use-wagmi';

import { ConnectModal } from '@/components/ConnectModal';
import { Button } from '@/shared/ui/Button';
import { formatAddressShort } from '@/shared/lib/format/formatAddressShort';

const openModal = ref(false);

const { t } = useI18n();
const { address } = useAccount();
const { disconnect } = useDisconnect();

const onClickHandler = () => {
  if (address.value) {
    disconnect();
  } else {
    openModal.value = !openModal.value;
  }
};

const onCloseHandler = () => (openModal.value = false);
</script>
<template>
  <Button @click="onClickHandler" class-name="connect-btn" color="inverted-primary" centered>
    {{ address ? formatAddressShort(address) : t('header.connect') }}
  </Button>
  <ConnectModal :open="openModal" @close="onCloseHandler" />
</template>
<style scoped lang="scss">
.connect-btn {
  width: 150px;
}
</style>
