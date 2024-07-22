import { ResourceCardPatient } from "../../components/ResourceCardPatient";
import { getRecursosA } from "../../shared/hooks/getRecursosA";
import { useEffect, useState } from "react";

export const ResourceGrid = () => {
    const { recursos, loading, error } = getRecursosA()
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
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading resources</div>;
    }

    if (!authorized) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
            {recursos.map((recurso, index) => (
                <ResourceCardPatient
                    key={index}
                    titulo={recurso.titulo}
                    imagenRecurso={recurso.imagen}
                    tipo={recurso.tipo}
                    contenido={recurso.contenido}
                    resourceType={recurso.tipo}
                    _id={recurso._id}
                />
            ))}
        </div>
    );
};