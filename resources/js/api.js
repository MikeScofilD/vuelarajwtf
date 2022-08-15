const { default: axios } = require("axios");
import router from "./router";

const api = axios.create();
//start request
api.interceptors.request.use(
    (config) => {
        //request
        if (localStorage.getItem("access_token")) {
            config.headers.authorization = `Bearer ${localStorage.getItem(
                "access_token"
            )}`;
        }
        return config;
    },
    (error) => {
        console.log(22222);
    }
);
//end requestx
api.interceptors.response.use(
    {},
    (error) => {
        if (error.response.data.message === "Token has expired") {
            return axios
                .post(
                    "/api/auth/refresh",
                    {},
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem(
                                "access_token"
                            )}`,
                        },
                    }
                )
                .then((res) => {
                    localStorage.setItem("access_token", res.data.access_token);
                    error.config.headers.authorization = `Bearer ${localStorage.getItem(
                        res.data.access_token
                    )}`;
                    return api.request(error.config);
                    // console.log(res.data.access_token);
                });
            // console.log("helo");
        }
        // console.log(error.response.data.message);
        if (error.response.status === 401) {
            router.push({ name: "user.login" });
        }
    }
);
//   this.api = api;
export default api;
