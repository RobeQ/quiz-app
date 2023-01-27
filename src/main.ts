import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue';
import router from './router/index';
import { worker } from './mocks/browser';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import './style.css';

const vuetify = createVuetify({
  components,
  directives,
  display: {
    mobileBreakpoint: 'md',
  },
});

if (import.meta.env.VITE_MSW_ENABLED === 'true') {
  worker.start();
}

createApp(App).use(router).use(vuetify).mount('#app');
