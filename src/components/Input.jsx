
export const Input = ({ id, type, placeholder, required }) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
    );
};