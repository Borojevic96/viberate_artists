import axios from "axios";

const restClient = axios.create({
  baseURL: "https://run.mocky.io/v3/",
});

export default restClient;
