import axios from "axios";

// Changes port
let port;
if (window.location.hostname != "affederation.net") {
   port = ":5000"
}
export const api = axios.create({
   baseURL: `${window.location.protocol}//${window.location.hostname}${port}/api`,
});

