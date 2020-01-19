import { authHeader, handleResponse } from './handle-response';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch("http://localhost:3000/user", requestOptions).then(handleResponse);
}