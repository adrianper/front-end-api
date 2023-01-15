import axios from "axios"
// import { setCookieOnce } from "scripts/generalFunctions"

const signup = async (userData) => {
    const response = await axios.post('/auth/signup', userData, /*{
        withCredentials: true,
    }*/)

    if (response.data && !response.data.error) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        global.setCookieOnce('x-access-token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
    } else {
        localStorage.removeItem('user')
    }

    return response.data
}

const login = async (userData) => {
    const response = await axios.post('/auth/login', userData)

    if (response.data && !response.data.error) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        global.setCookieOnce('x-access-token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
    } else {
        localStorage.removeItem('user')
    }

    return response.data
}

const serviceActions = { signup, login }

export default serviceActions