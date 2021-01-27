import axios from "axios";

export const Axios = axios.create({
  baseURL:
    "http://findeveryfilm-env.eba-z2t45vkk.us-east-1.elasticbeanstalk.com/api/",
});
