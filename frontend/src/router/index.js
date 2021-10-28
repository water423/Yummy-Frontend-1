import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PersonSpace from '../pages/PersonSpace'

Vue.use(Router)

export default new Router({
  mode: 'history', // 后端配置的时候需要注意：https://router.vuejs.org/zh/guide/essentials/history-mode.html
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/PersonSpace',
      name: 'PersonSpace',
      component: PersonSpace
    }
  ]
})
