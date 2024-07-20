import { FaHome, FaUser, FaBox, FaEnvelope, FaRegistered } from 'react-icons/fa';
import { SidebarLayout } from '../../components/SheetsComponents';

export const Sidebar = () => {
    
    const links = [
        { href: '/principal/home', icon: FaHome, label: 'Home' },
        { href: '/principal/admin/registerPreceptor', icon: FaRegistered, label: 'Registri preceptor'},
        { href: '/principal/preceptor/regiterUsuario', icon: FaRegistered, label: 'Registro usuario'}
    ];

    return (
        <SidebarLayout
            links={links}
            avatarSrc="./placeholder.svg"
            avatarName="John Doe"
            avatarUsername="johndoe"
        />
    );
}