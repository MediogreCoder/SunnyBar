import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://sunnybartender.herokuapp.com/team/",
  development: "https://sunnybartender.herokuapp.com/team/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;