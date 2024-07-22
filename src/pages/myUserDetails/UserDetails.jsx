import { Card } from '../../components/Card'
import { CardContentForm } from '../../components/CardContentForm';
import { CardHeader } from '../../components/CardHeader'
import { useUserFromLocalStorage } from '../../shared/hooks'
import { useGetUserById } from '../../shared/hooks';
import { FcCheckmark } from "react-icons/fc";

export const UserDetails = () => {
    const userLogged = useUserFromLocalStorage();
    const { user, loading, error } = useGetUserById(userLogged?.id);

    console.log(user, "usuario");

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error al obtener el usuario</div>;
    }

    return (
        <Card className="bg-[white] w-full max-w-2xl">
            <CardHeader className="bg-primary text-primary-foreground p-8 flex items-center">
                <div className="flex items-center gap-8">
                    <div className="grid gap-4">
                        <div className="text-2xl font-bold">{user.usuario.nombre}</div>
                        <div className="text-lg text-muted-foreground">{user.usuario.role}</div>
                    </div>
                </div>
            </CardHeader>
            <CardContentForm className="p-8 grid gap-8">
                <div className="flex items-center justify-between">
                    <div className="text-muted-foreground text-base">Correo</div>
                    <div className="text-foreground text-base font-medium">{user.usuario.correo}</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-muted-foreground text-base">Estado</div>
                    <div className="flex items-center gap-4">
                        <div className={`bg-${user.usuario.estado ? 'green' : 'red'}-500/20 text-${user.usuario.estado ? 'green' : 'red'}-500 px-3 py-2 rounded-md text-base font-medium`}>
                            {user.usuario.estado ? 'Active' : 'Inactive'}
                        </div>
                        {user.usuario.estado && <FcCheckmark className="h-6 w-6 text-green-500" />}
                    </div>
                </div>
            </CardContentForm>
            <div>
                {user.usuario.role === 'PACIENTE_ROLE' && (
                    <CardHeader className="bg-primary text-primary-foreground p-8 flex items-center">
                        <div className="flex items-center gap-8">
                            <div className="grid gap-4">
                                <div className="text-2xl font-bold">Preceptor</div>
                                <div className="text-2xl font-bold">{user.usuario.preceptor?.nombre}</div>
                                <div className="text-lg text-muted-foreground">{user.usuario.preceptor?.correo}</div>
                            </div>
                        </div>
                    </CardHeader>
                )}
            </div>
        </Card>
    );
}