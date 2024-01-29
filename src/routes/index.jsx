import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/home'
import Explore from '../pages/explore'
import Notifications from '../pages/notifications'
import Notfound from '../pages/notfound'
import Main from '../layouts/main'

export default createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
                path: '*',
                element: <Notfound />
            }
        ]
    }
])

export {RouterProvider}