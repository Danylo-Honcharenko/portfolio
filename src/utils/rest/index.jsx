import {useEffect, useState} from "react";
import {axiosInstance} from "./axiosCfg.js";
import {queryError} from "./error.js";

export const projects = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosInstance.get("/projects")
            .then(res => setData(res.data))
            .catch(err => queryError(err))
    }, []);
    return data;
}