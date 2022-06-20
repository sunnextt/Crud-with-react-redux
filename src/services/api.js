import axios from 'axios';
import authHeader from './authHeader';

const instance = axios.create({
    baseURL: 'https://stage.api.sloovi.com/',
});

const header = authHeader();


instance.interceptors.request.use(
    (config) => {
        if (header) {
            config.headers.Authorization = header.Authorization;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;
