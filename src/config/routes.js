import { Chat, Home, InitAppPage, Login, ReduxCounter, Signup, UsersPosts, /*TestComponents*/ } from 'pages'

export const routes = {
    home: {
        path: '/',
        linkName: 'Home',
        element: <Home />
    },
    login: {
        path: '/login',
        linkName: 'Login',
        element: <Login />
    },
    signup: {
        path: '/signup',
        linkName: 'Signup',
        element: <Signup />
    },
    chat: {
        path: '/chat',
        linkName: 'Chat',
        element: <Chat />
    },
    users: {
        path: '/users',
        linkName: 'Users posts',
        element: <UsersPosts />
    },
    app: {
        path: '/app',
        linkName: 'App',
        element: <InitAppPage />
    },
    redux_counter: {
        path: '/redux_counter',
        linkName: 'Counter',
        element: <ReduxCounter />
    },
    // testComponents: {
    //   path: '/testComponents',
    //   linkName: 'Test Components',
    //   element: <TestComponents />
    // },
}

export const headerRoutes = ['home', 'login', 'signup']

export const sideMenuRoutes = ['chat', 'users', 'app', 'redux_counter']