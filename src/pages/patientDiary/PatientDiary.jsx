import { ButtonForm } from "../../components/ButtonForm";
import { TextareaForm } from "../../components/TextareaForm";

export const PatientDiary = () => {
    //obtener las entradas del diario y guardarlas en un array en la db

    const today = new Date().toLocaleDateString();
    return (
        <div className="w-full">
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                <h1 className="text-2xl font-bold">Mis Diarios</h1>
                <div className="p-4 bg-gray-100 rounded-md">
                    <h2 className="mb-2 text-lg font-semibold">Diario de hoy {today}</h2>
                    <TextareaForm placeholder="Escribe aquí..." className="mb-4" />
                    <ButtonForm className="bg-primary text-primary-foreground">Guardar</ButtonForm>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {diaries.map((diary) => (
                        <div key={diary.id} className="p-4 bg-white border rounded-md">
                            <h3 className="mb-2 text-lg font-semibold">{diary.date}</h3>
                            <ButtonDiary className="bg-primary text-primary-foreground">Ver</ButtonDiary>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
