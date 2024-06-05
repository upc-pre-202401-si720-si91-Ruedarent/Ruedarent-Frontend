import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Auth/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Auth/RegisterView.vue')
    },
    {
      path: '/Recommendations',
      name: 'Recommendations',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Renter/RecommendationsView.vue')
    },
    {
      path: '/myProfile',
      name: 'myProfile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Renter/UserProfileRents.vue')
    },
    {
      path: '/vehicles',
      name: 'Vehicle',
      component: () => import('../views/Renter/VehiclesView.vue')
    },
    {
      path: '/RentVehicle',
      name: 'RentVehicle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Renter/RentVehicleView.vue')
    },
    {
      path: '/OwnerProfileView',
      name: 'OwnerProfileView',
      component: () => import('../views/Owner/OwnerProfileView.vue')
    },
    {
      path: '/PlansOwner',
      name: 'PlansOwner',
      component: () => import('../views/Owner/PlansOwnerView.vue')
    },
    {
      path:'/OrderOwner',
      name:'OrderOwner',
      component: () => import('../views/Owner/OrderOwnerView.vue')
    },
    {
      path:'/VehicleRegisterOwner',
      name:'VehicleRegisterOwner',
      component: () => import('../views/Owner/VehicleRegisterOwnerView.vue')
    },
    {
      path:'/OwnerViewVehicles',
      name:'OwnerViewVehicles',
      component: () => import('../views/Owner/OwnerViewVehicles.vue')
    }
  ]
})

export default router