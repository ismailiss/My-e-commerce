import axios from 'axios';
 
const instance = axios.create({
    baseURL: 'http://my-json-server.typicode.com/ismailiss/fake-api/blob/master/',
    headers: {
        headerType: 'application/json'
    }
});
 
export default instance;