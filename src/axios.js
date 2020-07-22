// import the axios library
import axios from "axios";

// return a new version of axios with useful settings applied
export default axios.create({
        baseURL: "http://ec2-18-130-184-16.eu-west-2.compute.amazonaws.com/api",
        headers: {
        Accept: "application/json",
    },
});