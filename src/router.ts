import { createRouter, createWebHashHistory } from 'vue-router'

export enum R {
  TODO = 'TODO',
  DONE = 'DONE'
}

export const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '',
      redirect: { name: 'home' },
      meta: { showFooter: false, showHeader:false, showHeaderActions:false }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: { showFooter: false, showHeader:false, showHeaderActions:false }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: { showFooter: true, showHeader:true, showHeaderActions:false }
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
      meta: { showFooter: true, showHeader:true, showHeaderActions:false }
    }
    ,
    {
      path: '/account',
      name: 'account',
      component: () => import('./views/Account.vue'),
      meta: { showFooter: true, showHeader:true, showHeaderActions:false }
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
      meta: { showFooter: false, showHeader:true, showHeaderActions:false }
    }
    ,
    {
      path: '/contructor',
      name: 'contructor',
      component: () => import('./views/PrintConstructor.vue'),
      meta: { showFooter: false, showHeader:true, showHeaderActions:true }
    }
  ]
})
