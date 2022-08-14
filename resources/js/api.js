const { default: axios } = require("axios");
import router from './router';

const api = axios.create();
//start request
api.interceptors.request.use(
    (config) => {
        //request
        if (localStorage.getItem("access_token")) {
            config.headers = {
                authorization: `Bearer ${localStorage.getItem("access_token")}`,
            };
        }
        return config;
    },
    (error) => {
        console.log(22222);
    }
);
//end request
api.interceptors.response.use(
    (config) => {
        if (localStorage.getItem("access_token")) {
            config.headers = {
                authorization: `Bearer ${localStorage.getItem("access_token")}`,
            };
        }
        return config;
    },
    (error) => {
        if (error.response.status === 401) {
            router.push({ name: "user.login" });
        }
    }
);
//   this.api = api;
export default api
