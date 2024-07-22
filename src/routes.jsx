import { Auth } from './pages/auth/Auth'
import { Sidebar } from './pages/sidebar/Sidebar';
import { Home } from './components/Home'
import { RegisterPreceptor } from './pages/registerPreceptor/RegisterPreceptor';
import { RegisterPaciente } from './pages/registerPaciente/RegisterPaciente';
import { DiariesOfMyPatients } from './pages/diariesOfMyPatients/DiariesOfMyPatients';
import { AdminRecursosPage } from './pages/AdminRecursos/AdminRecursosPage';
import { FormResourceAdminEdit } from './pages/resourcesAdmin/ResourceEdit';
import { BlogPage } from './pages/BlogPage.jsx/BlogPage';
import {MyDiary} from "./pages/myDiary/MyDiary"
import { ResourceGrid } from './pages/resources/ResourceGrid';
import { BlogPagePatient } from './pages/BlogPage.jsx/BlogPagePatient';
import { Users } from './pages/listUser/Users';
import { Notfound } from './components/Notfound';
import { Unauthorized } from './components/Unauthorized';
import { UserDetails } from './pages/myUserDetails/UserDetails';

const routes = [
    { path: '/', element: <Auth /> },
    { path: '*', element: <Notfound /> },
    { path: '/unauthorized', element: <Unauthorized /> },
    { path: '/register', element: <RegisterPaciente />},
    {
        path: '/principal',
        element: <Sidebar />,
        children: [
            { path: 'home', element: <Home /> },
            { index: true, element: <Home /> },
            { path: 'myDiary', element: <MyDiary /> },
            { path: "resourcesGrid", element: <ResourceGrid/>},
            { path: 'resources/:id', element: <BlogPagePatient />},
            { path: 'myUserDetails', element: <UserDetails />},
        ],
    },
    {
        path: '/principal/admin',
        element: <Sidebar />,
        children: [
            { path: 'home', element: <Home /> },
            { index: true, element: <Home /> },
            { path: 'registerPreceptor', element: <RegisterPreceptor /> },
            { path: 'adminRecursos', element: <AdminRecursosPage/>},
            { path: 'resources/:id', element: <BlogPage />},
            { path: 'resourcesEdit/:id', element: <FormResourceAdminEdit/>},
            { path: 'users', element: <Users/>},
            { path: 'myUserDetails', element: <UserDetails />},
        ],
    },
    {
        path: '/principal/preceptor',
        element: <Sidebar />,
        children: [
            { path: 'home', element: <Home /> },
            { index: true, element: <Home /> },
            { path: 'allDiarios', element: <DiariesOfMyPatients /> },
            { path: 'myUserDetails', element: <UserDetails />},
        ],
    },
    
]

export default routes;