import { MyDiaryForm } from "../myDiaryForm/MyDiaryForm";
import { DiaryGrid  } from "../diaryPacient/DiaryGrid";

export const MyDiary = () => {
    return (
        <div>
            <MyDiaryForm />
            <DiaryGrid />
        </div>
    );
};
