import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const useUserFromLocalStorage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        } else {
            toast.error('User not found');
        }
    }, []);

    return user;
};
