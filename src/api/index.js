import axios from 'axios'
import Cookie from 'js-cookie'

axios.interceptors.request.use(
    config => {
        var userToken = Cookie.get('userToken')
        if (userToken) {
            config.headers.userToken = userToken;
        }
        var imageToken = Cookie.get('imageToken')
        if (imageToken) {
            config.headers.imageToken = imageToken;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

axios.interceptors.response.use(function (response) {
    // Do something with response data
    var _response = {status: response.status, ...response.data}
    return _response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});