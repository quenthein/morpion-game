import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from "@/views/GameView";
import RulesView from "@/views/RulesView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rules',
    name: 'rules',
    component: RulesView
  },

  {
    path: '/game',
    name: 'game',
    component: GameView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
