import Vue from 'vue'
import Router from 'vue-router'
import Default from '../layout/default.vue'
import Blank from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity'
import GoodsList from '@/page/goodsList.vue'
import Register from '@/page/register.vue'
import Login from '@/page/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        },
        {
          path: 's/:name',
          name: 'goods',
          component: GoodsList
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank,
      children: [{
        path: '/register',
        name: 'register',
        component: Register
      }, {
        path: '/login',
        name: 'login',
        component: Login
      }]
    }
  ]
})
