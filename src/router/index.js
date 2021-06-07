import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: {
            title: "竹林客栈",
        },
    },
    {
        path: "/category/:name",
        name: "Category",
        component: () => import("@/views/Category.vue"),
        meta: {
            title: "文章分类",
        },
    },
    {
        path: "/tag/:name",
        name: "Tag",
        component: () => import("@/views/Tag.vue"),
        meta: {
            title: "标签",
        },
    },
    {
        path: "/timeline",
        name: "TimeLine",
        component: () => import("@/views/TimeLine.vue"),
        meta: {
            title: "时间线",
        },
    },
    {
        path: "/message",
        name: "Message",
        component: () => import("@/views/Message.vue"),
        meta: {
            title: "留言板",
        },
    },
]

const router = new VueRouter({
    mode: "history",
    routes
})

router.beforeEach((to, from, next) => {
    console.log(from);
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;