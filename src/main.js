import Vue from 'vue'
import App from './App.js'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)
const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')
