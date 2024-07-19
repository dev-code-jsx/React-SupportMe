
export const ResourceCard = ({ titulo, imagenRecurso, tipo, linkHref }) => {
    //hacer que cuando toque el boton de go me suba el id a la url y luego ese id lo busque en la base de datos y muestre el recurso

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
                <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{tipo}</span>
                    <Link
                        to={`/resources/${linkHref}`}
                        className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Go
                    </Link>
                </div>
            </div>
        </div>
    );
};