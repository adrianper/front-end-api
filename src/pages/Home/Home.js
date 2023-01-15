import { Grid } from 'components'
import React, { useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai'

const Home = () => {
    useEffect(() => {
        if (global.getCookieToken() == '')
            console.log('cookie token is empty')
    }, [])
    return (
        <Grid contentX="center" contentY="center" itemsX="center">
            <AiFillHome size={30} />
            <h1>Home Page</h1>
        </Grid>
    )
}

export default Home
