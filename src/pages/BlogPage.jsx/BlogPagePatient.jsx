import { BlogArticlePatient } from "../../components/BlogResourcePatient";
import { useGetRecursoById } from "../../shared/hooks/useGetRecursoById";
import { useParams } from "react-router-dom";
export const BlogPagePatient = () => {
    const {id} = useParams()
    const {recurso, loading, error} = useGetRecursoById(id)
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading resource</div>;
    }

    return (
        <div>
            <BlogArticlePatient recurso={recurso} />
        </div>
    );
}