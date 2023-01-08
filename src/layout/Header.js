import React from 'react'
import { Link as PageLink } from 'react-router-dom'

import { AiOutlineBars } from 'react-icons/ai'

import { headerRoutes, routes } from 'config/routes'
import { Flex, Grid } from 'components'

import './styles/header_styles.scss'
import useSideMenuContext from 'hooks/useSideMenuContext'

const Header = () => {

    const { isOpen, toggleSideMenu } = useSideMenuContext()

    const handleClickBars = () => {
        console.log('Side Menu is open ? ', !isOpen)
        toggleSideMenu()
    }

    return (
        <Grid className="header" itemsX="center" itemsY="center" padding="0.8em" direction="column" contentX="space-between">
            <Flex className="side_menu_bars" onClick={handleClickBars}>
                <AiOutlineBars size="25" />
            </Flex>
            <Grid gap="1em" direction="column">
                {headerRoutes.map(route =>
                    <PageLink key={route} to={routes[route].path} >
                        {routes[route].linkName}
                    </PageLink>
                )}
            </Grid>
        </Grid>
    )
}

export default Header
