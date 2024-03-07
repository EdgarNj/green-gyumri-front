import axios from "axios";


const api = axios.create({
    // baseURL: "http://localhost:4000",
    baseURL: "http://192.168.31.101:4000",
})

api.interceptors.request.use(
    function(config) {
        config.url += (config.url.indexOf('?') === -1 ? '?' : '&') + `lang=${localStorage.getItem("lang") || "hy"}`;
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

class Api {
    static getHomeSliderData() {
        return api.get('home/slider')
    }
}

export default Api;
