import Vue from 'vue'
import store from './store'
import Router from 'vue-router'

Vue.use(Router);
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: () => import('./components/MainContent.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/proposal',
      name: 'proposal',
      component: () => import('./components/Proposal.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/shareExperience',
      name: 'shareExperience',
      component: () => import('./components/ShareExperience.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/questioning',
      name: 'questioning',
      component: () => import('./views/Survey.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./components/Profile.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('./components/Support.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/LoginLayout.vue'),
      meta: {layout: 'login'},
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('./views/Logout.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/post/:id',
      name: 'showPost',
      component: () => import('./components/ShowPost.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/ticket/:id',
      name: 'showTicket',
      component: () => import('./components/ShowTicket.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
  ]
});

router.beforeEach((to, from, next) => {

    // check if the route requires authentication and user is not logged in
    if (to.matched.some(route => route.meta.requiresAuth) && !localStorage.getItem('isLoggedIn')) {
        // redirect to login page
        alert('Необходимо войти в систему!')
        next({ name: 'login' })
        return
    }

    next()
});

export default router