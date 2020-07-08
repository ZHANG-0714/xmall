import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    redirect:'/'
  },
  {
    path: '/',
    component: Layout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,  //首页
        meta:{
          title:"首页"
        }
      },
      // {
      //   path: '/Rotation',
      //   name: 'Rotation',
      //   component: () => import('../views/Paging.vue'),  //轮播图
      //   meta:{
      //     title:"分页表格"
      //   }
      // },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
