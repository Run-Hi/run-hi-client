import axios from "axios";

const Api = axios.create({
    baseURL: "https://liner.sickgyun.kro.kr",
    headers: {
        "Contents-Type": "application/json",
    }
})
export default Api