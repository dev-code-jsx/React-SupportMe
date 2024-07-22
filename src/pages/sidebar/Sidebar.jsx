import { FaHome, FaRegistered } from 'react-icons/fa';
import { VscCodeOss } from "react-icons/vsc";
import { SidebarLayout } from '../../components/SheetsComponents';
import React, { useEffect, useState } from 'react';

export const Sidebar = () => {
    const [links, setLinks] = useState([]);
    const [avatar, setAvatar] = useState({
        name: 'John Doe',
        username: 'johndoe',
        src: './placeholder.svg'
    });

    useEffect(() => {
        // Obtener detalles del usuario desde localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            // Configurar avatar
            setAvatar({
                name: user.nombre || 'John Doe',
                username: user.correo || 'johndoe',
                src: user.avatar || './placeholder.svg'
            });

            // Configurar enlaces según el rol del usuario
            let userLinks = [{ href: '/principal/home', icon: FaHome, label: 'Home' },];

            switch (user.role) {
                case 'PACIENTE_ROLE':
                    break;
                case 'ADMIN_ROLE':
                    userLinks.push({ href: '/principal/admin/registerPreceptor', icon: FaRegistered, label: 'Register Preceptor' });
                    userLinks.push({ href: '/principal/admin/adminRecursos', icon: VscCodeOss, label: 'CRUD Recursos'})
                    break;
                case 'PRECEPTOR_ROLE':
                    userLinks.push({ href: '/principal/preceptor/allDiarios', icon: VscCodeOss, label: 'Diarios asignados'})
                    break;
                default:
                    break;
            }

            setLinks(userLinks);
        }
    }, []);

    return (
        <SidebarLayout
            links={links}
            avatarSrc={avatar.src}
            avatarName={avatar.name}
            avatarUsername={avatar.username}
        />
    );
}
