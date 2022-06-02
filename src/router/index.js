import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import FestivalView from '../views/FestivalView.vue'
import BilleterieView from '../views/BilleterieView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import MentionsView from '../views/MentionsView.vue'
import ArtistesView from '../views/ArtistesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programmation',
      name: 'programmation',
      component: ProgrammationView
    },
    {
      path: '/festival',
      name: 'festival',
      component: FestivalView
    },
    {
      path: '/billeterie',
      name: 'billeterie',
      component: BilleterieView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/concert',
      name: 'concert',
      component: ConcertView
    },
    {
      path: '/mentions',
      name: 'mentions',
      component: MentionsView
    },
    {
      path: '/artistes',
      name: 'artistes',
      component: ArtistesView
    },
  ]
})

export default router
