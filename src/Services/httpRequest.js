import axios from "axios";
const http = axios.create({
  baseURL: "https://api.ludusback.site",
});
export default http;
