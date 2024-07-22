import { ResourceGridA } from "../resourcesAdmin/ResourceAdmin";
import { FormResourceAdmin } from "../resourceFormAdmin/FormResourceAdmin";
import { useEffect, useState } from "react";

export const AdminRecursosPage = () => {
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            setAuthorized(true);
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