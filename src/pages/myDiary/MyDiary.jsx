import { MyDiaryForm } from "../myDiaryForm/MyDiaryForm";
import { DiaryGrid } from "../diaryPacient/DiaryGrid";
import { useEffect, useState } from "react";

export const MyDiary = () => {
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            const user = JSON.parse(token);
            console.log(user);
            if (user.role === 'PACIENTE_ROLE') {
                setAuthorized(true);
            } else {
                window.location.href = '/unauthorized';
            }
        } else {
            localStorage.removeItem('user');
            window.location.href = '/unauthorized';
        }
    }, []);

    if (!authorized) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <MyDiaryForm />
            <DiaryGrid />
        </div>
    );
};
