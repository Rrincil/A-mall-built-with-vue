import { createApp } from 'vue'
import APP from './APP.vue'

import router from '../../router/mobile/index'
import store from '../../store'
import axios from '../../http'
// import  apiConfig  from './api.config.js' 
axios.defaults.baseURL=process.env.VUE_APP_BASE_API
import installElementPlus from '../../plugins/element'
// createApp.prototype.$axios = axios
const app = createApp(APP)
installElementPlus(app)
app.config.globalProperties.$axios = axios
app.use(store).use(router).mount('#APP')