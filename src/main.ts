import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/router";

const app = createApp(App)
// 加载路由器
app.use(router)
// 加载pinia
const pinia = createPinia()
app.use(pinia)
// 加载element-plus
app.use(ElementPlus)
//  挂载到index.html中id为app的div上
app.mount('#app')
