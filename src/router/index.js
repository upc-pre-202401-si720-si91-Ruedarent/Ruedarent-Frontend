import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/Recommendations',
      name: 'Recommendations',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RecommendationsView.vue')
    },
    {
      path: '/myProfile',
      name: 'myProfile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserProfileRents.vue')
    },
    {
      path: '/vehicles',
      name: 'Vehicle',
      component: () => import('../views/VehiclesView.vue')
    },
    {
      path: '/RentVehicle',
      name: 'RentVehicle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RentVehicleView.vue')
    },
    {
      path: '/OwnerProfileView',
      name: 'OwnerProfileView',
      component: () => import('../views/OwnerProfileView.vue')
    },
    {
      path: '/PlansOwner',
      name: 'PlansOwner',
      component: () => import('../views/PlansOwnerView.vue')
    },
    {
      path:'/OrderOwner',
      name:'OrderOwner',
      component: () => import('../views/OrderOwnerView.vue')
    },
    {
      path:'/VehicleRegisterOwner',
      name:'VehicleRegisterOwner',
      component: () => import('../views/VehicleRegisterOwnerView.vue')
    },
    {
      path:'/OwnerViewVehicles',
      name:'OwnerViewVehicles',
      component: () => import('../views/OwnerViewVehicles.vue')
    }
  ]
})

export default router