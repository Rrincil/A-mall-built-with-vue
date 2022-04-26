import { createApp } from 'vue'
import APP from './APP.vue'

import router from '../../router/mobile/index'
import store from '../../store'
import axios from '../../http'
import { Button,Popup,Icon,Lazyload ,Swipe, SwipeItem,Col, Row,ActionBar, ActionBarIcon, ActionBarButton,Search,Image as VanImage} from 'vant'
// import  apiConfig  from './api.config.js' 
axios.defaults.baseURL=process.env.VUE_APP_BASE_API
import installElementPlus from '../../plugins/element'
// createApp.prototype.$axios = axios
const app = createApp(APP)
installElementPlus(app)
app.config.globalProperties.$axios = axios
app.use(store).use(router).use(Button).use(Popup).use(Icon).use(Swipe)
.use(SwipeItem).use(Lazyload, {
  lazyComponent: true,
}).use(Col).use(Row).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(Search).use(VanImage).mount('#APP')

