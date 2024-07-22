import { Link } from "react-router-dom";
export const ResourceCardPatient = ({ titulo, imagenRecurso, tipo, contenido, _id }) => {
    //hacer que cuando toque el boton de go me suba el id a la url y luego ese id lo busque en la base de datos y muestre el recurso
    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };
    return (
        <div className="rounded-lg overflow-hidden shadow-lg">
            <img
                src={imagenRecurso}
                width={400}
                height={200}
                alt="Resource Image"
                className="w-full h-[200px] object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{titulo}</h3>
                <span className="text-muted-foreground text-base">{tipo}</span>
                <p className="text-muted-foreground text-justify">
                    {shortenText(contenido, 150)} {/* Adjust the maxLength as needed */}
                </p>
                <Link
                    to={`/principal/resources/${_id}`}
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-2"
                >
                    Go
                </Link>
            </div>
        </div>
    );
};