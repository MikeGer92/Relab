import axios from '@/api/axios';

const getUsers = () => {
    return axios.get('/users/list');
};

export default {
    getUsers
};