import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/catalog/',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/CatalogView.vue')
  },
  {
    path: '/details/:id',
    name: 'details',
    props: true,
    component: () => import(/* webpackChunkName: "catalog" */ '../views/DetailsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path : '/:cathMatch(.*)*',
    name : 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */'../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
