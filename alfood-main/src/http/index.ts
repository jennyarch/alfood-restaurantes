import axios from "axios";
import { DEFAULT_MAX_VERSION } from "tls";

const http = axios.create({
  baseURL: 'http://localhost:8000/api/v2/'
})

export default http;