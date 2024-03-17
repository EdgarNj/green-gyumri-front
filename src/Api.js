import axios from "axios";


const api = axios.create({
    // baseURL: "http://192.168.100.11:4000",
    baseURL: "http://192.168.100.21:4000",
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

    static getHomeCelebrateData(page) {
        return api.get(`home/celebrate?limit=3&page=${page}`)
    }

    static getHomeNewsData() {
        return api.get(`home/news`)
    }

    static getHomeLastBlockData() {
        return api.get(`home/last-block`)
    }

    //BOOK START

    static getReservedDaysData() {
        return api.get(`book/list`)
    }

    //BOOK END
    // SERVICES
    static getServicesData() {
        return api.get('/services', {params: {limit: 25}})
    }

    static getWorkersData(data) {
        const {id, page} = data;

        return api.get(`/services/workers/${id}`, {params: {limit: 10, page}})
    }


    // FOOTER DATA
    static getContactsData() {
        return api.get('/contacts');
    }

    static getWeblinksData() {
        return api.get('/links', {params: {limit: 10}});
    }

    // FOODS
    static getFoodsData(page) {
        return api.get('/foods', {params: {limit: 20, page}});
    }

    static getCompositionsData(foodId) {
        return api.get('/foods/compositions', {params: {foodId, limit: 100}});
    }
}

export default Api;
