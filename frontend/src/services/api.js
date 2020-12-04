import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'https://latest.free.beeceptor.com',
});
/**
class Api{
    constructor(apiURL) {
        this.apiURL = apiURL
    }

    post(url, objeto){
        return instance.post(`${this.apiURL}${url}`, objeto)
    }

    put(url, objeto){
        return instance.put(`${this.apiURL}${url}`, objeto)
    }
    delete(url){
        return instance.delete(`${this.apiURL}${url}`)
    }
    get(url){
        return instance.get(`${this.apiURL}${url}`)
    }
}
 */

export default Api;