import axios from 'axios';

const checkAuth = () => axios.get('/api/v1/users/isAuth');

export default checkAuth;
