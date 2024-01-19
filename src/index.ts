import { createApp } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import { UseWagmiPlugin } from 'use-wagmi';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';

import App from './app/App.vue';
import { router } from './shared/config/router';
import { i18n } from './shared/config/i18n';
import { wagmiConfig } from './shared/config/wagmi';
import './app/styles/index.scss';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(i18n);
app.use(ToastPlugin);
app.use(UseWagmiPlugin, { config: wagmiConfig });
app.use(VueQueryPlugin);
app.use(pinia);

app.mount('#app');
