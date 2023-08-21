import axios from "axios";

// Changes port
export const api = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}/api`,
});
