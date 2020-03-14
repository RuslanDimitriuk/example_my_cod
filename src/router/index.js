import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main/MainMenu'
import Registration from '../components/registration/Registration'
import Urgency from '../components/registration/Urgency'
import Result from '../components/global/Result'

Vue.use(VueRouter);

const routes = [
    {
        path: '/', name: 'Main', component: Main
    },
    {
        path: '/registration', name: 'Registration', component: Registration, props: true
    },
    {
        path: '/urgency', name: 'Urgency', component: Urgency, props: true
    },
    {
        path: '/result', name: 'Result', component: Result, props: true
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = new VueRouter({
    mode: 'history',
    routes
});
router.beforeEach((to, from, next) => {
    if (_.isUndefined(to.params.idActionType) && to.path !== '/') {
        next('/');
    } else {
        next()
    }
});
export default router
