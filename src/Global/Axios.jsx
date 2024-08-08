import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://application-backend-beta.vercel.app', 
});

export default axiosInstance;