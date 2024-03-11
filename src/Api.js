import axios from "axios";


const api = axios.create({
    baseURL: "http://192.168.10.146:4000",
    // baseURL: "http://localhost:4000",
})

api.interceptors.request.use(
    function (config) {
        config.url += (config.url.indexOf('?') === -1 ? '?' : '&') + `lang=${localStorage.getItem("lang") || "hy"}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

class Api {
    static getHomeSliderData() {
        return api.get('home/slider')
    }
    static getHomeAboutData() {
        return api.get('home/about')
    }
    static getHomeProvidesData() {
        return api.get('home/provides')
    }

    // SERVICES
    static getServicesData() {
        return api.get('services')
    }

    static getWorkersData(data) {
        const {id,limit,page} = data;

        return api.get(`services/workers/${id}`,{params:{limit,page}})
    }
}

export default Api;
