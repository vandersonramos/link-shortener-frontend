import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/modules/Main/views/Main';
import Success from '@/modules/Main/views/Success';
import Decrypt from '@/modules/Main/views/Decrypt';
import Analyze from '@/modules/Main/views/Analyze';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/:url_key',
      name: 'Decrypt',
      component: Decrypt
    },
    {
      path: '/views/analyze',
      name: 'Analyze',
      component: Analyze
    }
  ]
})
