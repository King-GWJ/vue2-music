import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/page/home/Home.vue'
import Discover from "@/page/home/discover/Discover.vue";
import Blogs from "@/page/home/blogs/Blogs.vue";
import Mine from "@/page/home/mine/Mine.vue";
import MusicPlay from "@/page/home/musicPlay/MusicPlay.vue";
import Community from "@/page/home/community/Community.vue";
import Search from "@/page/search/Search.vue"
import SongList from "@/page/home/songList/SongList.vue"
import Login from "@/page/login/login.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // 重定向
        redirect: '/home'
    },
    {
        // 地址为 /home 时，页面展示 Home 组件
        path: '/home',
        name: 'home',
        component: Home,
        redirect: '/home/discover',
        // 配置子路由，此处路由只在home页面中展示
        children: [
            {
                path: '/home/discover',
                name: 'discover',
                component: Discover,
                meta: {
                    title: '发现'
                },
            },
            {
                path: '/home/blogs',
                name: 'blogs',
                component: Blogs,
                meta: {
                    title: '博客'
                },
            },
            {
                path: '/home/musicPlay',
                name: 'musicPlay',
                component: MusicPlay,
                meta: {
                    title: '漫游'
                },
            },

            {
                path: '/home/community',
                name: 'community',
                component: Community,
                meta: {
                    title: '社区'
                },
            },
            {
                path: '/home/mine',
                name: 'mine',
                component: Mine,
                meta: {
                    title: '我的'
                },
            },
            {
                path: '/path/songlist',
                name: 'songlist',
                component: SongList,
            }
        ]
    },
    {
        path:'/search',
        name:'search',
        component: Search
    }
    ,
    {
        path:'/login',
        name:'login',
        component: Login,
        meta: {
            title: '登录'
        },
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
