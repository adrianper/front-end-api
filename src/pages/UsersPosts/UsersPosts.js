import axios from 'axios'
import { Button, Grid } from 'components'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const UsersPosts = () => {
    const [users, setUsers] = useState([])

    const usersPostsRequest = async () => {
        const response = await axios.get('/users_posts')
            .catch(error => {
                const errorMessage = (error.response && error.response.data.error) || error.message
                toast.error(errorMessage)
                return error
            })

        if (response.data) setUsers(response.data)
    }

    // useEffect(() => {
    //     usersPostsRequest()
    // }, [])

    return (
        <Grid gap="1em" itemsX="center">
            <h2>Users</h2>
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
