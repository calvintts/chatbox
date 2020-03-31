import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://chatbox-f3e7e.firebaseio.com/',
});

export default instance;

