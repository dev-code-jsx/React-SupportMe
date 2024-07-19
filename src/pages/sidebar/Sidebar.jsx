import { FaHome, FaUser, FaBox, FaEnvelope, FaBars, FaSignOutAlt } from 'react-icons/fa';
import { SidebarLayout } from '../../components/SheetsComponents';

export const Sidebar = () => {
    //Hacer validacion de rol y mandar los links y el avatar correspondiente
    const links = [
        { href: '/principal/home', icon: FaHome, label: 'Home' },
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