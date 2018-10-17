import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-agdavid.firebaseio.com/',
});

export default instance;