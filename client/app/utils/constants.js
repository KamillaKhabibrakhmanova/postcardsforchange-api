/**
 * Return base postcards4change API URL, depending on environment
 *
 * @return {string} URL
 */

let baseUrl;

switch(process.env.NODE_ENV) {
    case 'production':
        baseUrl='https://postcards4change.herokuapp.com/';
        break;
    case 'staging':
        baseUrl='https://postcards4change.herokuapp.com/';
        break;
    default:
        baseUrl='http://localhost:8080/';

}

export const BASE_URL = baseUrl;
