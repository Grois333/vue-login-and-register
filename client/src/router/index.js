import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import { isLoggedIn } from '../utils/auth.js'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      allowAnonymous: true
    }

  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Protected routes
router.beforeEach((to, from, next) => {
  
  if (to.name == 'Login' && isLoggedIn()) {
  //if (to.meta.allowAnonymous && isLoggedIn()) {
      next({ path: '/dashboard' })
  }
  else if(to.name == 'Register' && isLoggedIn()){
    next({ path: '/dashboard' })
  }
  else if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  else {
    next()
  }  
})

export default router
