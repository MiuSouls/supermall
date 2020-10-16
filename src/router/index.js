import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import Cart from '../views/cart/cart.vue'
import Category from '../views/category/category.vue'
import Profile from '../views/profile/profile.vue'
import detail from '../views/detail/detail.vue'


Vue.use(Router)
export default new Router({
  routes: [
    {
        path:'',
        redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/detail/:iid',
      component:detail
    }

  ],
  mode:'history'
})
