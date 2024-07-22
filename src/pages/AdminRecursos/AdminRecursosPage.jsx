import { ResourceGridA } from "../resourcesAdmin/ResourceAdmin";
import { FormResourceAdmin } from "../resourceFormAdmin/FormResourceAdmin";
import { useEffect, useState } from "react";

export const AdminRecursosPage = () => {
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            const user = JSON.parse(token);
            console.log(user);
            if (user.role === 'ADMIN_ROLE') {
                setAuthorized(true);
            } else {
                localStorage.removeItem('user');
                window.location.href = '/unauthorized';
            }
        } else {
            localStorage.removeItem('user');
            window.location.href = '/unauthorized';
        }
    }, []);

    if (!authorized) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <FormResourceAdmin />
            <ResourceGridA />
        </div>
    )
}