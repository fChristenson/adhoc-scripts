import axios from "axios";

export const checkGithub = () => {
  return axios
    .get("http://github.com")
    .then((res) => console.log(`Github returned ${res.status}`))
    .catch((res) => console.log(`Github returned ${res.status}`));
};
