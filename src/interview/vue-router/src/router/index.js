import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    // props: {
    //   newsletterPopup: true,
    //   userName: 'iu'
    // },
    props: true
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
  },

  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/users/index.vue'),
    props: true,
    children: [
      {
        path: '/',
        redirect: {name: 'child'}
      },
      {
        path: '/child',
        name: 'child',
        component: () => import('@/views/users/child1.vue'),
        props: true
      },
      {
        path: '/otherChild',
        name: 'otherChild',
        components: {
          default: () => import('@/views/users/child2.vue'),
          childs: () => import('@/views/users/child3.vue'),
        },
        props: true
      },

    ]
  },


]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
