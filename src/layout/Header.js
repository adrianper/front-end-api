import React from 'react'
import { Link as PageLink } from 'react-router-dom'

import { AiOutlineBars } from 'react-icons/ai'

import { headerRoutes, routes } from 'config/routes'
import { Flex, Grid } from 'components'

import './styles/header_styles.scss'
import useSideMenuContext from 'hooks/useSideMenuContext'

const Header = () => {

    const { toggleSideMenu } = useSideMenuContext()

    return (
        <Flex className="header" align="center" justify="space-between" padding="0.8em">
            <Flex className="side_menu_bars" onClick={toggleSideMenu}>
                <AiOutlineBars size="25" />
            </Flex>
            <Grid gap="1em" direction="column">
                {headerRoutes.map(route =>
                    <PageLink key={route} to={routes[route].path} >
                        {routes[route].icon} &nbsp;
                        {routes[route].linkName}
                    </PageLink>
                )}
            </Grid>
        </Flex>
    )
}

export default Header
