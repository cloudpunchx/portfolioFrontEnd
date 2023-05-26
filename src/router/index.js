import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: [
      {
        title: "Siobhan Bonardi"
      },
      {
        name: "description",
        content: "Welcome to my personal portfolio | Siobhan Bonardi"
      },
      {
        name: "keywords",
        content: "cloudpunch, portfolio, web developer, full stack web developer"
      },
      {
        name: "author",
        content: "Siobhan Bonardi"
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
