import { useGetUser } from "../../shared/hooks";
import { useEffect, useState } from "react";

export const Users = () => {
    const { users, isLoading } = useGetUser();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            const user = JSON.parse(token);
            console.log(user);
            if (user.role === 'ADMIN_ROLE') {
                setAuthorized(true);
            } else {
                localStorage.removeItem('user');
                window.location.href = '/unauthorized';
            }
        } else {
            localStorage.removeItem('user');
            window.location.href = '/unauthorized';
        }
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!users || users.length === 0) {
        return <p>No users found</p>;
    }

    if (!authorized) {
        return <div>Cargando...</div>;
    }
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">List of Users</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border-b border-gray-200 text-left">Nombre</th>
                            <th className="px-4 py-2 border-b border-gray-200 text-left">Correo</th>
                            <th className="px-4 py-2 border-b border-gray-200 text-left">Role</th>
                            <th className="px-4 py-2 border-b border-gray-200 text-left">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="hover:bg-gray-100">
                                <td className="px-4 py-2 border-b border-gray-200">{user.nombre}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{user.correo}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{user.role}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{user.estado ? 'Activo' : 'Desactivo'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
