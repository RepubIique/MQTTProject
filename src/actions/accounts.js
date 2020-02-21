import { fetcher } from './index';


// Testing
export const getUsers = () => {
    return fetcher()
        .get(`/api/listusers`)
        .then(response => {
            return response.data;
        })
        .catch(err => console.log('Error', err));
};

export const login = (payload) => {
    return fetcher()
        .post(`/api/login`, payload)
        .then(response => {
            return response.data;
        })
        .catch(err => console.log('Error', err));
};
