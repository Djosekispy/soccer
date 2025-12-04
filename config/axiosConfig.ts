import axios from "axios";


const ApiRequest = axios.create({
    baseURL : "http://api.football-data.org/v4",
    headers:{
        "Content-Type" : "application/json",
        "x-Auth-Token" : "78e40528f78149c6824835ce946a5d98"

    }
});

export default ApiRequest;