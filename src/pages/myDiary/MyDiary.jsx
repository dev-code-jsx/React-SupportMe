import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export const MyDiary = () => {
    //obtener el id de la url buscarlo en la db y recorrer las entradas y mostrarlas
    //setear la fecha del dia que se ingreso
    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
                <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back
                </Link>
                <h1 className="text-3xl font-bold ml-auto">Mi diario</h1>
            </div>
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{date}</h2>
                    <div className="space-y-2">
                        {entradas.map((entry, index) => (
                            <div key={index} className="bg-card p-4 rounded-lg shadow-sm">
                                <p className="text-lg font-medium">{entry.title}</p>
                                <p className="text-muted-foreground">{entry.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};