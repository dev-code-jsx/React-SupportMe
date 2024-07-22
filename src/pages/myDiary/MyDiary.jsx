import { MyDiaryForm } from "../myDiaryForm/MyDiaryForm";
import { DiaryGrid } from "../diaryPacient/DiaryGrid";
import { useEffect, useState } from "react";

export const MyDiary = () => {
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            setAuthorized(true);
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
