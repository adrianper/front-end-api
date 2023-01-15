import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { Button, Grid, TextField } from 'components'

import './login.scss'
import { login, reset } from 'redux/reducers/auth/authSlice'
import { toast } from 'react-toastify'
// import { setCookieOnce } from 'scripts/generalFunctions'


// withCredentials: true, //[allow sert 3rd party cookies] / [send cookies]
// credentials: 'include' //[send cookies]

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })

    const { auth } = useSelector(store => store)
    const { /*user, */authenticated } = auth

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = useCallback((value, name) => {
        setFormData(formData => ({ ...formData, [name]: value }))
    }, [])

    const verifyEmptyValues = () => {
        const errors = []
        Object.keys(formData).forEach(input => {
            if (formData[input] === '') errors.push(`${input} could not be empty`)
        })
        if (errors.length > 0) alert(errors.map(err => err + '\n'))
        return errors.length === 0
    }

    const handleSumbit = async e => {
        e.preventDefault()

        if (!verifyEmptyValues()) return

        dispatch(login(formData)).then(res => {
            if (res.payload.error) return toast.error(res.payload.error)
        })
        // const response = await axios.post('/auth/login', formData, {
        //     withCredentials: true,
        // })

        // if (!response.data) return console.log(response)
        // if (response.data.error) return toast.error(response.data.error)

        // setCookieOnce('x-access-token', response.data.token)
        // navigate('/users')
    }

    const usersPostsRequest = async () => {
        await axios.get('/users_posts')
            .catch(error => {
                const errorMessage = (error.response && error.response.data.error) || error.message
                toast.error(errorMessage)
            })
    }

    useEffect(() => {
        if (authenticated) navigate('/users')
    }, [authenticated, navigate])

    return (
        <Grid className="login" itemsX="center" gap="1em">
            <h2>Login</h2>

            <form onSubmit={handleSumbit}>
                <Grid w100 className="login__form" maxWidth="20em" gap="1em">
                    <TextField label="Email"
                        type="email"
                        value={formData.email}
                        onChange={v => handleChange(v, 'email')}
                    />
                    <TextField label="Password"
                        type="password"
                        value={formData.password}
                        onChange={v => handleChange(v, 'password')}
                    />
                    <Button type="submit">Login</Button>
                </Grid>
            </form>
            <Button type="submit" onClick={usersPostsRequest}>Users posts</Button>
            <Button type="submit" onClick={() => dispatch(reset())}>Reset auth</Button>
        </Grid>
    )
}

export default Login
