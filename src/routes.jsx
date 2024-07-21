import { Auth } from './pages/auth/Auth'
import { Sidebar } from './pages/sidebar/Sidebar';
import { Home } from './components/Home'
import { RegisterPreceptor } from './pages/registerPreceptor/RegisterPreceptor';
import { RegisterPaciente } from './pages/registerPaciente/RegisterPaciente';
import { AdminRecursosPage } from './pages/AdminRecursos/AdminRecursosPage';
import { BlogPage } from './pages/BlogPage.jsx/BlogPage';
const routes = [
    { path: '/', element: <Auth /> },
    { path: '/register', element: <RegisterPaciente />},
    {
        path: '/principal',
        element: <Sidebar />,
        children: [
            { path: 'home', element: <Home /> },
            { index: true, element: <Home /> }
        ],
    },
    {
        path: '/principal/admin',
        element: <Sidebar />,
        children: [
            { path: 'home', element: <Home /> },
            { index: true, element: <Home /> },
            { path: 'registerPreceptor', element: <RegisterPreceptor /> },
            { index: true, element: <RegisterPreceptor /> },
            { path: 'adminRecursos', element: <AdminRecursosPage/>},
            { index: true, element: <AdminRecursosPage/>},
            { path: 'resources/:id', element: <BlogPage />} 
        ],
    },
    {
        path: '/principal/preceptor',
        element: <Sidebar />,
        children: [
            { path: 'home', element: <Home /> },
            { index: true, element: <Home /> },
        ],
    },
    
]

export default routes;