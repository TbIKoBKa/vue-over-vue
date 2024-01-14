import { createApp } from 'vue';

import App from './app/App.vue';
import router from './shared/config/router';
import './app/styles/index.scss';

const app = createApp(App);
app.use(router);

app.mount('#app');
