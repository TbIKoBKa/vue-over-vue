import { createApp } from 'vue';

import App from './app/App.vue';
import { router } from './shared/config/router';
import { i18n } from './shared/config/i18n';
import './app/styles/index.scss';

const app = createApp(App);
app.use(router);
app.use(i18n);

app.mount('#app');
