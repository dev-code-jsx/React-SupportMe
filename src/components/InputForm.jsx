
export const InputForm = ({ id, placeholder, className }) => (
    <input
        type="text"
        id={id}
        placeholder={placeholder}
        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className}`}
    />
);