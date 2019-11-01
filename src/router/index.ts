import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import firebase from "firebase";

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
    component: () => import('../components/dashboard/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/projects/CreateProject.vue'),
    meta: {
      requiresAuth: true
    }
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
    component: () => import('../components/projects/ProjectDetails.vue'),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) {
    next('signin');
  } else {
    next();
  }
})

export default router;
