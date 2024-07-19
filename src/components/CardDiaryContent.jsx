
export const CardContentDiary = ({ name, date, content }) => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-gray-500 text-sm">{date}</p>
            <p className="mt-4 text-gray-700">{content}</p>
        </div>
    );
};