/**
 * Return base postcards4change API URL, depending on environment
 *
 * @return {string} URL
 */

let baseUrl;
let environment;

switch(process.env.NODE_ENV) {
    case 'production':
        baseUrl='https://postcards4change.herokuapp.com/';
        environment = 'production';
        break;
    case 'staging':
        baseUrl='https://postcards4change.herokuapp.com/';
        environment = 'staging';
        break;
    default:
        baseUrl='http://localhost:8080/';
        environment = 'development';

}

export const BASE_URL = baseUrl;
export const ENVIRONMENT = environment;
