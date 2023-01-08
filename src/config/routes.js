import { Chat, Home, InitAppPage, Login, ReduxCounter, Signup, UsersPosts, /*TestComponents*/ } from 'pages'
import { FaReact } from 'react-icons/fa'
import { AiFillHome, AiOutlineLogin, AiOutlineCalculator } from 'react-icons/ai'
import { BsFilePost, BsFillChatLeftDotsFill } from 'react-icons/bs'

export const routes = {
    home: {
        path: '/',
        linkName: 'Home',
        element: <Home />,
        icon: <AiFillHome />
    },
    login: {
        path: '/login',
        linkName: 'Login',
        element: <Login />,
        icon: <AiOutlineLogin />
    },
    signup: {
        path: '/signup',
        linkName: 'Signup',
        element: <Signup />
    },
    chat: {
        path: '/chat',
        linkName: 'Chat',
        element: <Chat />,
        icon: <BsFillChatLeftDotsFill />
    },
    users_posts: {
        path: '/users',
        linkName: 'Users posts',
        element: <UsersPosts />,
        icon: <BsFilePost />
    },
    app: {
        path: '/app',
        linkName: 'App',
        element: <InitAppPage />,
        icon: <FaReact />
    },
    redux_counter: {
        path: '/redux_counter',
        linkName: 'Counter',
        element: <ReduxCounter />,
        icon: <AiOutlineCalculator />
    },
    // testComponents: {
    //   path: '/testComponents',
    //   linkName: 'Test Components',
    //   element: <TestComponents />
    // },
}

export const headerRoutes = ['home', 'login', 'signup']

export const sideMenuRoutes = ['chat', 'users_posts', 'app', 'redux_counter']