import axios from 'axios'
import { Button, Grid } from 'components'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { toast } from 'react-toastify'
import { reset } from 'redux/reducers/auth/authSlice'

const UsersPosts = () => {
    const [users, setUsers] = useState([])

    const dispatch = useDispatch()

    const usersPostsRequest = async () => {
        const response = await axios.get('/users_posts')
            .catch(error => {
                // const errorMessage = (error.response && error.response.data.error) || error.message
                // toast.error(errorMessage)
                return error
            })

        if (response.data) setUsers(response.data)
    }

    return (
        <Grid gap="1rem" padding="1rem" itemsX="center">
            <h2>Users</h2>
            <Button type="submit" onClick={() => dispatch(reset())}>Reset auth</Button>
            {users.length === 0 &&
                <Button onClick={usersPostsRequest}>Show users</Button>
            }
            {users.map((user, i) => (
                <p key={i}>user: {user.name}</p>
            ))}
        </Grid>
    )
}

export default UsersPosts
