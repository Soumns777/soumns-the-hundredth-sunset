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
    // props: {
    //   newsletterPopup: true,
    //   userName: 'iu'
    // },
    props: true,
    meta: {
      isKeepAlive: true,
      requiresAuth: true
    }
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
    beforeEnter: (to, from, next) => {
      console.log(to, from, '🍊 路由独享守卫:beforeEnter')
      next()
    },
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


/**
 * 全局前置守卫
 */
router.beforeEach((to, from, next) => {
  if (to.name == 'child') {
    next({name: 'otherChild'})
  } else {
    next()
  }

  const {meta: {isKeepAlive, requiresAuth}} = to

  console.log('是否递归:' + isKeepAlive, '是否鉴权:' + requiresAuth, '🍊 全局前置守卫:beforeEach')
})

/**
 * 全局解析守卫
 */
router.beforeResolve((to, from, next) => {
  console.log(to, from, '🍊 全局解析守卫:beforeResolve')
  next()
})

/**
 * 全局后置钩子(没有next)
 */
router.afterEach((to, from) => {
  console.log(to, from, '🍊 全局后置钩子:afterEach')
})


export default router
