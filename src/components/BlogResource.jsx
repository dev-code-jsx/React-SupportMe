import { Link } from 'react-router-dom';

export const BlogArticle = ({ recurso }) => {
    return (
        <div className="container mx-auto px-4 py-6 md:px-6 md:py-12 lg:py-16">
            <article className="prose prose-lg max-w-3xl mx-auto dark:prose-dark">
                <div className="space-y-2 not-prose">
                    <div className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                        {recurso.tipo}
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 dark:text-white">
                        {recurso.titulo}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Publicado el {new Date(recurso.createdAt).toLocaleDateString()}
                    </p>
                </div>
                <figure className="mt-8">
                    <img
                        src={recurso.imagen} 
                        alt="Imagen de portada"
                        className="w-full h-auto rounded-lg object-cover shadow-lg"
                    />
                    <figcaption className="text-center text-gray-500 mt-2">Imagen de portada</figcaption>
                </figure>
                <div className="mt-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {recurso.contenido}
                </div>
                <div className="flex justify-start mt-10">
                    <Link
                        to="/principal/admin/adminRecursos"
                        className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium text-white bg-blue-600 rounded-md shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Regresar
                    </Link>
                </div>
            </article>
        </div>
    );
};
