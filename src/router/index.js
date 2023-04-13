import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import("@/views/HomeView"),
  },
  {
    path: '/Task',
    name: 'Task',
    component: () => import("@/views/TaskView.vue"),
  },
  {
    path: '/Organizations',
    name: 'Organizations',
    component: () => import("@/views/OrganizationsView.vue"),
  },
  {
    path: '/Lab',
    name: 'Lab',
    component: () => import("@/views/LabView.vue"),
  },
  {
    path: '/Person',
    name: 'Person',
    component: () => import("@/views/PersonView.vue"),
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
