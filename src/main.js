import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://ghibliapi.herokuapp.com';

import '@/assets/scss/main.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')