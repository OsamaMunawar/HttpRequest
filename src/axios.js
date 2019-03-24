import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common["Authorizaiton"] = 'AUTH TAKEN FROM INSTANCE';

export default instance;