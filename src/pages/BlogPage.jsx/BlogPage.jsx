
export const BlogPage = () => {
    //aqui hay dos fformas de hacerlo mandan el id y aqui solo lo envian o obtienen el id de la url.
    //agregar el hook que busque el articulo en la base de datos por id y obtener esa data en la variable article

    return (
        <div>
            <BlogArticle article={article} />
        </div>
    );
}