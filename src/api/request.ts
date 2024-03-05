import axios from 'axios';

export let url = 'https://api.fxratesapi.com/convert/';

axios.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    console.log(error.response);
    return error;
  },
);

let requests = {
  currency: (query: any) => axios.get(url + `${query}`),
};

export default requests;
