import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import DashboardPage from './components/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'
import NewUniversity from './components/newUniversity.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/newuniversity', component: NewUniversity }
]

export default new VueRouter({mode: 'history', routes})