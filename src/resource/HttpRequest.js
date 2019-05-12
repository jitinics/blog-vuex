import axios from 'axios'
import humps from 'humps'

class HttpRequest {
  baseURL = 'http://localhost:8080/'
  constructor (baseURL) {
    this.baseURL = baseURL ? baseURL : this.baseURL
    this.instance = axios.create({
      baseURL: this.baseURL,
      timeout: 6000
    });
    this.init()
  }

  init() {
    this.instance.interceptors.request.use(function (config) {
      config.headers['user_id'] = 2
      if(config.data) {
        config.data = humps.decamelizeKeys(config.data)
      }
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    this.instance.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      return Promise.reject(error);
    })
  }

  get(url, config) {
    return this.instance.get(url, config)
  }
  put(url, data, config) {
    return this.instance.put(url, data, config)
  }
  post(url, data, config) {
    return this.instance.post(url, data, config)
  }
  delete(url, config) {
    return this.instance.delete(url, config)
  }
}

export default HttpRequest