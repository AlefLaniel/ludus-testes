import axios from "axios";
const http = axios.create({
  baseURL: "https://ludus-test-server.herokuapp.com",
});
export default http;
