import Vue from 'vue'
import Router from 'vue-router'

// component imports for routes
import Home from './views/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Loan from './components/Loan.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

// function to check path authentication
function isLoggedIn (to, from, next) {
  if (localStorage.userToken !== undefined) {
    next()
  } else {
    next('/login')
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: isLoggedIn,
      meta: {title: 'Dashboard'}
    },
    {
      path: '/loan/:id',
      name: 'loan',
      component: Loan,
      beforeEnter: isLoggedIn
    }
  ]
})
