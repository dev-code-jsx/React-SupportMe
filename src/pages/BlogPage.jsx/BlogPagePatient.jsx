import { BlogArticlePatient } from "../../components/BlogResourcePatient";
import { useGetRecursoById } from "../../shared/hooks/useGetRecursoById";
import { useParams } from "react-router-dom";
export const BlogPagePatient = () => {
    const {id} = useParams()
    const {recurso, loading, error} = useGetRecursoById(id)
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            const user = JSON.parse(token);
            console.log(user);
            if (user.role === 'PACIENTE_ROLE') {
                setAuthorized(true);
            } else {
                window.location.href = '/unauthorized';
            }
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
        return <div>Loading...</div>;
    }
    return (
        <div>
            <BlogArticlePatient recurso={recurso} />
        </div>
    );
}