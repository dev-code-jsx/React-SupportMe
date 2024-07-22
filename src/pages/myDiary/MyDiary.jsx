import { useParams } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useAddMyDiary } from '../../shared/hooks/useAddMyDiary'; // Ajusta la ruta según tu estructura de carpetas
import { useMyDiaryForm } from '../../shared/hooks/useMyDiaryForm'; // Ajusta la ruta según tu estructura de carpetas
import toast from 'react-hot-toast';

export const MyDiary = () => {
    const { fecha } = useParams();
    const { isLoading, error, handleAddEntry } = useAddMyDiary();
    const { formState, handleInputValueChange, resetForm } = useMyDiaryForm();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleAddEntry(formState.contenido.value);
            toast.success('Entry added successfully');
            resetForm();
        } catch (error) {
            toast.error('Failed to add entry');
        }
    };

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
                <Link
                    to="/principal/home"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                    <VscArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </Link>
                <h1 className="text-3xl font-bold ml-auto">Mi diario</h1>
            </div>
            <div className="space-y-8">
                <h2 className="text-2xl font-bold">{fecha}</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-3">
                        <label htmlFor="contenido" className="block text-sm font-medium">Contenido</label>
                        <textarea
                            id="contenido"
                            placeholder="Ingresa el contenido"
                            value={formState.contenido.value}
                            onChange={handleInputValueChange}
                            className="w-full min-h-[150px] border rounded-lg p-2"
                        />
                    </div>
                    {formState.contenido.showError && !formState.contenido.isValid && (
                        <div className="text-red-500 text-sm">Contenido es requerido</div>
                    )}
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Guardando...' : 'Guardar Entrada'}
                    </button>
                </form>
                {error && <div className="text-red-500">Error: {error}</div>}
            </div>
        </div>
    );
};
