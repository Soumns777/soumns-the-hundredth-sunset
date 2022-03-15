import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createPersistedState } from 'pinia-persistedstate-plugin';

import App from './App.vue';

const store = createPinia();
store.use(createPersistedState());

createApp(App).use(store).mount('#app');
