import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ProjectView from '../views/ProjectView.vue' 
import TeamView from '../views/TeamView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/projects',
    name: 'project',
    component:ProjectView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path:'/team',
    name:'team',
    component:TeamView
  }
]

const router = new VueRouter({
  routes
})

export default router
