import axios from "axios";


const api = axios.create({
    //baseURL: "http://192.168.31.101:4000",
     baseURL: "http://localhost:4000",
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

    static getPricingData() {
        return api.get(`prices`)
    }

    static createPayment(values) {
        return api.post(`book/process-payment`, values, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }

    static checkReservation(id) {

        return api.put(`book/update`, {id}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
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

    static getPlacesData(page) {
        return api.get('/places', {params: {limit: 12, page}});
    }

    static getSinglePlaceData(id) {
        return api.get(`/places/${id}`);
    }

    static getCompositionsData(foodId) {
        return api.get('/foods/compositions', {params: {foodId, limit: 100}});
    }
}

export default Api;
