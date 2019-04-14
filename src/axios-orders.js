import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3493a.firebaseio.com/'
});

export default instance;