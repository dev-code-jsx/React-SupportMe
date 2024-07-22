import { CardDiary } from "../../components/CardDiary";
import { useGetDiary } from "../../shared/hooks/useGetDiary";

export const DiaryGrid = () => {
    const { diarios, loading, error } = useGetDiary();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading diarios: {error}</div>;
    }

    console.log('Diarios:', diarios); // Verifica los datos que se están pasando

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {diarios.map((diario, index) => (
                <CardDiary
                    key={index}
                    fecha={diario.fecha}
                    contenido={diario.contenido || 'No content available'}
                />
            ))}
        </div>
    );
};
