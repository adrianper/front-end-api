import axios from "axios"
import { toast } from "react-toastify"
import { hostURL } from "scripts/generalVariables"

axios.defaults.baseURL = hostURL
axios.defaults.withCredentials = true
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token') ?? ''}`
axios.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // error.response.data.error.forEach(errorMessage => {
    //     console.log(errorMessage)
    // })
    if (error.response.data.code === 'FST_JWT_BAD_REQUEST') {
        toast.info('Please login', { autoClose: 1500 })
        window.location.href = '/#/login'
    }
    else toast.error(error.response.data.error)
    return Promise.reject(error)
})