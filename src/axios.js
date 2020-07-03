// import the axios library
import axios from "axios";

// return a new version of axios with useful settings applied
export default axios.create({
        baseURL: "http://192.168.10.10/api",
        headers: {
        Accept: "application/json",
    },
});