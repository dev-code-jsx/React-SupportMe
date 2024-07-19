

export const DiariesOfMyPatients = () => {
    //obtener token del preceptor y buscar en la db los diarios de los pacientes y listarlos
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">Patient Journals</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {journalEntries.map((entry, index) => (
                    <CardDiary key={index}>
                        <CardContentDiary
                            name={entry.name}
                            date={entry.date}
                            content={entry.content}
                        />
                    </CardDiary>
                ))}
            </div>
        </div>
    );
}
