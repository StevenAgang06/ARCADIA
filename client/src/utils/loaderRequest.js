import customFetch from "./customFetch.js";
import {toast} from "react-toastify";
import {redirect} from "react-router-dom";

export const preFetch = async (method, url ,defaultUrl) => {
    try{
        const {data} = await customFetch[method](url);
        return data;
    }catch(error){
        toast.error(error?.response?.data?.message);
        return redirect(defaultUrl);
    }
} 