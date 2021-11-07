import axios from '@/api/axios';

const getUsers = userUrl => {
    return axios.get(userUrl);
};

export default {
    getUsers
};