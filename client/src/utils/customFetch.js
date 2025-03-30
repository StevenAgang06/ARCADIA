import axios from "axios";

const customFetch = axios.create({
  baseURL: "/arcadia",
});

export default customFetch;
