import { BlogArticle } from "../../components/BlogResource";
import { useGetRecursoById } from "../../shared/hooks/useGetRecursoById";
import { useParams } from "react-router-dom";
export const BlogPage = () => {
    const {id} = useParams()
    const {recurso, loading, error} = useGetRecursoById(id)
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading resource</div>;
    }
    //aqui hay dos fformas de hacerlo mandan el id y aqui solo lo envian o obtienen el id de la url.
    //agregar el hook que busque el articulo en la base de datos por id y obtener esa data en la variable article

    return (
        <div>
            <BlogArticle recurso={recurso} />
        </div>
    );
}