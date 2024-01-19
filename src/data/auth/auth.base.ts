import axios from 'axios';
import { HTTP_URL } from '../../config';

export const authApiInstance = axios.create({
    baseURL: `${HTTP_URL}/auth`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
    // headers: {"Access-Control-Allow-Origin": "*"}
});
