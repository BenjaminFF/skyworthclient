import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/main-page'
import statuspage from '@/components/status-page'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/statuspage',
      name: 'statuspage',
      component: statuspage
    },
  ]
})
