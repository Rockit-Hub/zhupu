import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login.vue'
import denlu from '@/components/login/denlu.vue'
import wangjimima from '@/components/login/wangjimima.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/login',
      name: 'login',
      component: login
    },
    {
      path:'/denlu',
      name: 'denlu',
      component: denlu
    },
    {
      path:'/wangjimima',
      name: 'wangjimima',
      component: wangjimima
    }
  ]
})
