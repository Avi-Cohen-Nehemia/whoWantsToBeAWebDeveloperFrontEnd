// import the axios library
import axios from "axios";

// return a new version of axios with useful settings applied
export default axios.create({
        baseURL: "https://who-wants-to-be-a-web-developer.developme.space/api",
        headers: {
        Accept: "application/json",
    },
});