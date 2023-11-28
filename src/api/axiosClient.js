import axios from 'axios';
import { config } from '../configs/config';

const axiosClient = axios.create({
    baseURL: config.envConfig,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosClient.interceptors.response.use(
    response => {
        return response;
    },

    error => {
        throw error;
    }
)

export default axiosClient;