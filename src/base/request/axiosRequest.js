import axios from "axios";
import {Toast} from "vant";

// const baseUrl = "http://121.89.213.194:5001"
const baseUrl = "https://zyxcl.xyz/music/api"

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    withCredentials: true,
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
    console.log("ggg", "请求拦截器：", config)
    config.params.cookie = ""
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
    });
    return config;
}, error => {
    Toast.clear()
    return Promise.reject(error);
})
//添加响应拦截器
instance.interceptors.response.use(response => {
    console.log("ggg", "响应拦截器：", response)

    Toast.clear()
    return Promise.resolve(response);
}, error => {
    Toast.clear()
    return Promise.reject(error);
})

export const request = ({url, params}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: {
                ...params
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    });
}
