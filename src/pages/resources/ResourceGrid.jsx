import { ResourceCard } from "../../components/ResourceCard";

export const ResourceGrid = () => {
    //cargar el hook que traiga los recursos y pasar esa informacion al componente

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
            {resources.map((resource, index) => (
                <ResourceCard
                    key={index}
                    title={resource.titulo}
                    imageSrc={resource.imagen}
                    resourceType={resource.tipo}
                    linkHref={resource._id}
                />
            ))}
        </div>
    );
};