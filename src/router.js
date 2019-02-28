import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/front/Login.vue')
        },
        {
            path: '/todo',
            name: 'todo',
            component: () => import( './views/front/Todo.vue')
        }
    ]
})
