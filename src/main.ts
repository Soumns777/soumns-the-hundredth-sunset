import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createPersistedState } from 'pinia-persistedstate-plugin';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue';

const store = createPinia();
store.use(createPersistedState());

import router from '@/router';

createApp(App).use(Antd).use(store).use(router).mount('#app');
