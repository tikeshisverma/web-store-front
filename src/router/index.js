import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import storeCreatorPage from '../pages/store-creator-page.vue'
import storeFrontPage from '../pages/store-front-page.vue'
import login from '../pages/login-page.vue'
const routes = [
    { path: '/', component: storeCreatorPage, name:'creator'},
    {path:"/store",component:storeFrontPage, name:"store"},
    {path:"/login", component:login, name:"login"}
  ]
  
export const router = new VueRouter({ 
  routes,
    mode:"history"
  })