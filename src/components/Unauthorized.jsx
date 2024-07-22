import { Link } from 'react-router-dom'
import { FiAlertTriangle } from "react-icons/fi";

export const Unauthorized = () => {
    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
                <FiAlertTriangle className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Unauthorized</h1>
                <p className="mt-4 text-muted-foreground">
                    No tienes permiso para acceder a esta página. Por favor, inicia sesión con tus credenciales.
                </p>
                <div className="mt-6">
                    <Link
                        to="/principal/home"
                        className="bg-[#1E40AF] inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground text-white shadow-sm transition-colors hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Regresar al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}
