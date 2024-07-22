export const CardDiary = ({ fecha, contenido }) => {
    console.log('CardDiary props:', { fecha, contenido }); // Verifica las props recibidas
    return (
        <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
                <h2 className="text-xl font-bold">{fecha}</h2>
                <p className="text-sm text-gray-60">{contenido || 'No content available'}</p>
            </div>
        </div>
    );
};
