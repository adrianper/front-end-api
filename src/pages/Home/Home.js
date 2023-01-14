import { Grid } from 'components'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'

const Home = () => {
    return (
        <Grid contentX="center" contentY="center" itemsX="center">
            <AiFillHome size={30}/>
            <h1>Home Page</h1>
        </Grid>
    )
}

export default Home
