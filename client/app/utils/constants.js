/**
 * Return base postcards4change API URL, depending on environment
 *
 * @return {string} URL
 */
export default function getBaseUrl() {
    if (process.env.NODE_ENV === 'production') {
      return 'https://postcards4change.herokuapp.com/'
    }
    else if (process.env.NODE_ENV === 'staging') {
        return 'https://postcards4chage-staging.herokuapp.com/'
    }
    else return 'http://localhost:8080/'
}
