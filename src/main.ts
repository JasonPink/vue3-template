import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from '@/router/index';
import './assets/styles/index.scss';

createApp(App).use(router).use(createPinia()).use(ElementPlus).mount('#app');
