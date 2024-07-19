import { Auth } from './pages/auth/Auth'
import { Sidebar } from './pages/sidebar/Sidebar';
import { Home } from './components/Home'

const routes = [
    { path: '/', element: <Auth /> },
    {
        path: '/principal',
        element: <Sidebar />,
        children: [
            { path: 'home', element: <Home /> },
            { index: true, element: <Home /> }
        ],
    }
]

export default routes;