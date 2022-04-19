import {createRouter, createWebHistory,} from "vue-router";
import type {RouteRecordRaw} from "vue-router";

// 创建路由表
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    props: true
  },

  {
    path: '/list/:results',
    name: 'list',
    component: () => import('@/views/list/index.vue'),
    props: true
  },
]


const router = createRouter({
  history: createWebHistory(), // 采用HTML5模式,使用 history.pushState API
  routes
})


export default router
