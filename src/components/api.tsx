import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:9090",
    headers: {
        "Contents-Type": "application/json",
    }
})
export default Api