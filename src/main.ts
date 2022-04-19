import {createPinia} from 'pinia';
import {createApp} from 'vue';
import {createPersistedState} from 'pinia-persistedstate-plugin';

import App from './App.vue';

const store = createPinia();
store.use(createPersistedState());


import router from "@/router";

createApp(App).use(store).use(router).mount('#app');
