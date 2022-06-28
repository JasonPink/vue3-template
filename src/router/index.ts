import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'login',
      key: 0,
    },
  },
  {
    path: '/talent',
    name: 'Talent',
    component: () => import('@/views/talent/index.vue'),
    children: [
      {
        path: '/talent/index1',
        name: 'index1',
        redirect: '/login',
        meta: {
          title: 'index1',
        },
        children: [
          {
            path: '/talent/index1/child1',
            name: 'child1',
            redirect: '/login',
            meta: {
              title: 'child1',
            },
          },
        ],
      },
      {
        path: '/talent/index2',
        name: 'index1',
        redirect: '/goods',
        meta: {
          title: 'index2',
        },
      },
    ],
    meta: {
      title: 'talent',
      key: 1,
    },
  },
  {
    path: '/',
    name: 'Goods',
    component: () => import('@/views/goods/index.vue'),
    meta: {
      title: 'goods',
      key: 3,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
