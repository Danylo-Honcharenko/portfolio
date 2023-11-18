import {axiosInstance} from "./axiosCfg.js";
import useSWR from "swr";

const fetcher = url => axiosInstance.get(url).then(res => res.data);
export const getProjects = () => {
    const {data, isLoading, error} = useSWR("/projects", fetcher);
    return {
        projects: data,
        error,
        isLoading
    }
}

export const getSkills = () => {
    const {data, isLoading, error} = useSWR("/my-technology-stacks", fetcher);
    return {
        skills: data,
        error,
        isLoading
    }
}

export const getCV = () => {
    const {data, isLoading, error} = useSWR("/cv", fetcher);
    return {
        cv: data,
        error,
        isLoading
    }
}