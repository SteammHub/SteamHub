import axios from 'axios';

export default axios.create({
    baseURL: 'https://auth.steamhub.cloud/'
});
