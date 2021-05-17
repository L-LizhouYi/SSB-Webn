import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => {
        require(['@/pages/Home'], resolve)
      },
      children: [
        {
          path: '/',
          name: 'index',
          component: resolve => {
            require(['@/pages/home/index'], resolve)
          }
        }
        //
      ],
      redirect: '/home/'
    },
    {
      path: '/user',
      name: 'user',
      component: resolve => {
        require(['@/pages/User'], resolve)
      },
      children: [
        {
          path: '/',
          name: 'login',
          component: resolve => {
            require(['@/pages/user/login'], resolve)
          }
        },
        {
          path: 'register',
          name: 'register',
          component: resolve => {
            require(['@/pages/user/register'], resolve)
          }
        },
        {
          path: 'resetpwd',
          name: 'resetpwd',
          component: resolve => {
            require(['@/pages/user/resetpwd'], resolve)
          }
        }
      ],
      redirect: '/user/'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
