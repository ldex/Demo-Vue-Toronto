import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue';
import Error from './views/Error.vue';
import ProductDetails from './components/ProductDetails.vue';
import ProductInsert from './components/ProductInsert.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/product/insert', // order important! before :id route
      name: 'productInsert',
      component: ProductInsert
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetails,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
