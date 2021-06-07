import axios from 'axios'
import urls from "@/http/urls"
import store from "@/store/index"
import router from "@/router/index"

const instance = axios.create({
    baseURL: urls.baseUrl,
    timeout: 5000,
});

instance.interceptors.request.use((config) => {
    if (store.state.token) {
        config.headers.Authorization = store.state.token;
    }
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        //默认除了2XX之外的都是错误的，就会走这里
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: "login",
                        query: { redirect: router.currentRoute.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    });
            }
        }
        return Promise.reject(error.response);
    }
);

export default {
    getArticles(page, limit) {
        return instance.get(urls.articles, {
            params: {
                page: page,
                limit: limit
            }
        }).then(res => res.data); // 这里的 res => res.data 是为了防止axios中的data属性和返回值中的data属性混淆
    }
}
