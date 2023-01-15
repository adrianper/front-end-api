import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

import { Grid } from 'components'

import SideMenu from './SideMenu'
import './styles/styles.scss'

const Layout = () => {
    return (
        <Grid className="app_layout" rows="auto 1fr">
            <Header />
            <Grid columns="auto 1fr">
                <SideMenu />
                <Outlet />
            </Grid>
        </Grid>
    )
}

export default Layout
