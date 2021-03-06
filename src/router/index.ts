import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// 创建路由表
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'useSuspense' },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    props: true,
  },
  {
    path: '/list/:results',
    name: 'list',
    component: () => import('@/views/list/index.vue'),
    props: true,
  },
  {
    path: '/pra',
    name: 'pra',
    component: () => import('@/views/pra/index.vue'),
    props: true,
  },

  {
    path: '/useComputed',
    name: 'useComputed',
    component: () => import('@/views/use-computed/index.vue'),
    props: true,
  },
  {
    path: '/useStyle',
    name: 'useStyle',
    component: () => import('@/views/use-style/index.vue'),
    props: true,
  },
  {
    path: '/useTeleport',
    name: 'useTeleport',
    component: () => import('@/views/use-teleport/index.vue'),
    props: true,
  },
  {
    path: '/useSuspense',
    name: 'useSuspense',
    component: () => import('@/views/use-suspense/index.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(), // 采用HTML5模式,使用 history.pushState API
  routes,
});

export default router;
