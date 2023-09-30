import axios from "axios";

const baseURL = import.meta.env.VITE_DEV

export const instance = axios.create({
    baseURL,
})