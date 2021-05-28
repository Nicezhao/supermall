import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home/home.vue')
const Cart = () => import('views/Cart/cart.vue')
const Classify = () => import('views/Classify/classify.vue')
const Profile = () => import('views/Profile/profile.vue')
const Detail = ()=> import('views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  }, {
    path: '/classify',
    component: Classify

  }, {
    path: '/profile',
    component: Profile
  },{
    path: '/detail/:iid',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
