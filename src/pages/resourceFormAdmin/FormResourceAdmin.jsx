import { CardForm } from '../../components/CardForm'
import { CardContentForm } from '../../components/CardContentForm'
import { CardFooterForm } from '../../components/CardFooterForm'
import { LabelForm } from '../../components/LabelForm'
import { InputForm } from '../../components/InputForm'
import { SelectForm, SelectTriggerForm, SelectContentForm, SelectItemForm, SelectValueForm } from '../../components/SelectOptions'
import { TextareaForm } from '../../components/TextareaForm'
import { ButtonForm } from '../../components/ButtonForm'

export const FormResourceAdmin = () => {
    //aqui obtener los datos del formulario, hacer la peticion al backend y guardar en el selectcontentform van las opciones del backend

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 md:max-w-2xl md:mx-auto">
                <h2 className="text-3xl font-bold mb-6">Recursos</h2>
                <CardForm className="mx-auto">
                    <CardContentForm className="grid gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <LabelForm htmlFor="image-url">URL de la imagen</LabelForm>
                                <InputForm id="image-url" placeholder="Ingresa la URL de la imagen" />
                            </div>
                            <div className="space-y-3">
                                <LabelForm htmlFor="title">Título</LabelForm>
                                <InputForm id="title" placeholder="Ingresa el título" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <LabelForm htmlFor="type">Tipo</LabelForm>
                            <SelectForm id="type">
                                <SelectTriggerForm>
                                    <SelectValueForm placeholder="Selecciona el tipo" />
                                </SelectTriggerForm>
                                <SelectContentForm>
                                    <SelectItemForm value="article">Artículo</SelectItemForm>
                                    <SelectItemForm value="video">Video</SelectItemForm>
                                    <SelectItemForm value="book">Libro</SelectItemForm>
                                    <SelectItemForm value="other">Otro</SelectItemForm>
                                </SelectContentForm>
                            </SelectForm>
                        </div>
                        <div className="space-y-3">
                            <LabelForm htmlFor="content">Contenido</LabelForm>
                            <TextareaForm id="content" placeholder="Ingresa el contenido" className="min-h-[150px]" />
                        </div>
                    </CardContentForm>
                    <CardFooterForm className="flex flex-col-reverse md:flex-row md:justify-between">
                        <ButtonForm variant="outline" className="mt-4 md:mt-0">
                            Limpiar
                        </ButtonForm>
                        <ButtonForm className="mt-4 md:mt-0">Guardar</ButtonForm>
                    </CardFooterForm>
                </CardForm>
            </div>
        </div>
        //aqui abajo listar los recursos que ya estan en la base de datos, si pueden si no, no importa
    );
}
