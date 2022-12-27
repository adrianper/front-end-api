import React from 'react'
import { HashRouter as Router, Routes, Route, Link as PageLink } from 'react-router-dom'
import { useComposeProviders } from 'hooks'

import Layout from 'layout'
import { Chat, Home, InitAppPage, /*TestComponents*/ } from 'pages'
import { ScreenSizeContextProvider } from 'context/ScreenSizeContext'

const routes = {
  home: '/',
  app: '/app',
  chat: '/chat',
  // testComponents: '/testComponents',
}

const routeName = {
  home: 'Home',
  app: 'App',
  chat: 'Chat',
  // testComponents: 'Test Components',
}

const routeElement = {
  home: <Home />,
  app: <InitAppPage />,
  chat: <Chat />,
  // testComponents: <TestComponents />,
}

const App = () => {
  const pages = Object.keys(routes).map(route => <PageLink key={route} to={routes[route]}>{routeName[route]}</PageLink>)

  const RouterProviders = useComposeProviders(Router, Routes)
  const AppProviders = useComposeProviders(ScreenSizeContextProvider)

  return (
    <AppProviders>
      <RouterProviders>
        <Route path={`${routes.home}`} element={<Layout pages={pages} />}>
          {Object.keys(routeElement).map(route =>
            <Route key={route} path={routes[route]} element={routeElement[route]} />
          )}
        </Route>
      </RouterProviders>
    </AppProviders>
  )
}

export default App
