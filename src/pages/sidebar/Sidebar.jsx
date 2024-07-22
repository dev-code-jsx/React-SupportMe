import { FaAirFreshener, FaBook, FaHome, FaMagento, FaRegistered } from 'react-icons/fa';
import { SidebarLayout } from '../../components/SheetsComponents';
import React, { useEffect, useState } from 'react';
import { Fa42Group, Fa5, FaAccusoft, FaSmoking } from 'react-icons/fa6';

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
            let userLinks = [{ href: '/principal/home', icon: FaHome, label: 'Home' },
                             { href: '/principal/myDiary', icon: FaBook, label: 'My Diary' }
            ]

            switch (user.role) {
                case 'ADMIN_ROLE':
                    userLinks.push({ href: '/principal/admin/registerPreceptor', icon: FaRegistered, label: 'Register Preceptor' });
                    break;
                case 'PRECEPTOR_ROLE':
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
