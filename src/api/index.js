import axios from 'axios';

const API_URL = 'https://api.deezer.com';

const getApiResource = (resourcePath) => {
    return axios.get(`${API_URL}${resourcePath}`);
};

export default getApiResource;