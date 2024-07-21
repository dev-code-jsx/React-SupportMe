import { ResourceCard } from "../../components/ResourceCard";
import { getRecursosA } from "../../shared/hooks/getRecursosA";
export const ResourceGridA = () => {
    //cargar el hook que traiga los recursos y pasar esa informacion al componente
    //aqui obtener el id y mandarlo a otra pagina para editar y el editar que abra un modal y se elimine
    const {recursos, loading, error} = getRecursosA()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
            {recursos.map((recurso, index) => (
                <div key={index} className="relative">
                    <ResourceCard
                          key={index}
                          titulo={recurso.titulo}
                          imagenRecurso={recurso.imagen}
                          tipo={recurso.tipo}
                          contenido={recurso.contenido}
                          resourceType={recurso.tipo}
                          _id={recurso._id}
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                        <button 
                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
                            onClick={() => handleEdit(resource._id)}
                        >
                            Editar
                        </button>
                        <button 
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                            onClick={() => handleDelete(resource._id)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};