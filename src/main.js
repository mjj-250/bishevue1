import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'

const Vue = createApp(App);
Vue.use(store).use(router).mount('#app')
Vue.use(ElementPlus)



