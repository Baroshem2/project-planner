import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: '/dashboard',
    name: "dashboard",
    component: () => import('../components/dashboard/Dashboard.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/projects/CreateProject.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/auth/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../components/auth/SignIn.vue')
  },
  {
    path: '/project/:id',
    name: 'projectId',
    component: () => import('../components/projects/ProjectDetails.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
