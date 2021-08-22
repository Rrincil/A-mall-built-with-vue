import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'
import installElementPlus from './plugins/element'
// createApp.prototype.$axios = axios
const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.$axios = axios
app.use(store).use(router).mount('#app')