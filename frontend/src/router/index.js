import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PersonSpace from '../pages/PersonSpace'

Vue.use(Router)

export default new Router({
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
