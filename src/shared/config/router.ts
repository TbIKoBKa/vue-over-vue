import { createRouter, createWebHistory } from 'vue-router';

import { Homepage } from '@/pages/Homepage';
import { TodoList } from '@/pages/TodoList';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/todo-list',
      name: 'todo-list',
      component: TodoList
    }
  ]
});

export default router;
