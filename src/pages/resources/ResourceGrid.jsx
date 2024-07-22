import { ResourceCardPatient } from "../../components/ResourceCardPatient";
import { getRecursosA } from "../../shared/hooks/getRecursosA";
export const ResourceGrid = () => {
    //cargar el hook que traiga los recursos y pasar esa informacion al componente
    const {recursos, loading, error} = getRecursosA()
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading resources</div>;
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