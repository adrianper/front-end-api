import { Grid } from 'components'
import { routes, sideMenuRoutes } from 'config/routes'
import useSideMenuContext from 'hooks/useSideMenuContext'
import React from 'react'
import { Link as PageLink } from 'react-router-dom'

import './styles/side_menu_styles.scss'

const SideMenu = () => {
    const { isOpen, toggleSideMenu } = useSideMenuContext()

    return (
        <Grid className={`side_menu${isOpen ? ' open' : ''}`}>
            <Grid className="side_menu__link_container" gap="1rem">
                {sideMenuRoutes.map((route, i) =>
                    <PageLink
                        key={i}
                        to={routes[route].path}
                        onClick={toggleSideMenu}
                    >
                        {routes[route].linkName}
                    </PageLink>
                )}
            </Grid>
        </Grid>
    )
}

export default SideMenu
