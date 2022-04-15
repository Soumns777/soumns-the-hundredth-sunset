import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    props: {
      newsletterPopup: true,
      userName: 'iu'
    },
  },
  {
    path: '/list/:list/:test',
    name: 'list',
    component: () => import('@/views/list/index.vue'),
    props: true
  },

  {
    path: '/tab',
    name: 'tab',
    component: () => import('@/views/tab/index.vue'),
    children: [
      {
        path: '/',
        redirect: '/detail',
      },
      {

        path: '/detail',
        name: 'detail',
        component: () => import('@/views/tab/detail.vue'),
        props: route => ({tab: route.params.tab})
      },
      {

        path: '/profile',
        name: 'profile',
        component: () => import('@/views/tab/profile.vue'),
      },

    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
