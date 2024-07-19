import { Link } from 'react-router-dom';

export const BlogArticle = ({ article }) => {
    return (
        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
            <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
                <div className="space-y-2 not-prose">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{article.type}</div>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{article.title}</h1>
                    <p className="text-muted-foreground">Publicado el {new Date(article.timestamps).toLocaleDateString()}</p>
                </div>
                <figure className="lg:-mx-12 xl:-mx-20">
                    <img
                        src={article.imagen} 
                        alt="Imagen de portada"
                        width={1250}
                        height={340}
                        className="aspect-video overflow-hidden rounded-lg object-cover"
                    />
                    <figcaption className="text-center">Imagen de portada</figcaption>
                </figure>
                <p>{article.content}</p>
                <div className="flex justify-start">
                    <Link
                        to="/aqui-va-el-link-para-regresar"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Regresar
                    </Link>
                </div>
            </article>
        </div>
    );
};