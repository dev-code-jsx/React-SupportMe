import { BlogArticle } from "../../components/BlogResource";
import { useGetRecursoById } from "../../shared/hooks/useGetRecursoById";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const BlogPage = () => {
    const { id } = useParams()
    const { recurso, loading, error } = useGetRecursoById(id)
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('user');

        if (token.role === 'ADMIN_ROLE') {
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
        return <div>Error loading resource</div>;
    }

    if (!authorized) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <BlogArticle recurso={recurso} />
        </div>
    );
}