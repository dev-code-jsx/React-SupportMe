import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getUser as getUserRequest } from "../../services/api";

export const useGetUser = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getUser = async () => {
        setIsLoading(true);

        const userData = await getUserRequest();

        if (userData.error) {
            setIsLoading(false);
            return toast.error(
                userData.error.message || "Error when trying to get user"
            );
        }

        setUsers(userData.data.usuarios);
        setIsLoading(false);
        return userData.data.usuarios;
    }

    useEffect(() => {
        getUser();
    }, []);

    return { users, isLoading, getUser };
}
