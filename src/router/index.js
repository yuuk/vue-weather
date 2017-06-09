import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'list',
        component: List
    },{
        path: '/detail/:location',
        name: 'detail',
        component: Detail
    }]
})
