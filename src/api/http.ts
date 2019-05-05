/**
 * http request method
 * author
 * time
 */
import axios from 'axios';
import _jsonp from 'jsonp';
import qs from "qs";

const MAX_TIMEOUT = 4000;
//before request
axios.interceptors.request.use(config => {
    //you can do something here
    return config
}, error => {
    //you can do something here
    return Promise.reject(error)
})
//before response
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})
//axios global config
axios.defaults.withCredentials = true;
axios.defaults.timeout = MAX_TIMEOUT;
axios.defaults.validateStatus =(status) => {
    return status >= 200 && status < 300; 
}; 


//get mothod
const get = (url: string, params?: any) => {
    return axios({
        method: 'get',
        url: url,
        params: Object.assign({}, params),
        paramsSerializer: function (params) {
            return qs.stringify(params, { arrayFormat: 'brackets' })
        },
    })
}

//post mothod
const post = (url: string, params?: any) => {
    return axios({
        method: 'post',
        url: url,
        data: Object.assign({}, params)
    });
}


//jsonp mothod
const jsonp = (url: string, params?: any) => {
    url += (url.includes("?") ? "&" : "?") + qs.stringify(params);
    return new Promise((resolve, reject) => {
        _jsonp(url, { timeout: MAX_TIMEOUT }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

export {
    get,
    post,
    jsonp
}

/**
 * usage demo:
 * get('http://xx.com',{a:1,b:3}).then(res => { console.log(res) }).catch(err => { console.log(err) })
 * get/post/jsonp all the same
 */