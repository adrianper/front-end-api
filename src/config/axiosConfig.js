import axios from "axios"

// axios.defaults.baseURL = 'https://fp-api.magiei.app' /*****PRODUCTION*****/
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials = true
axios.defaults.headers.common['Authorization'] = `Bearer ${global.getCookieToken()}`