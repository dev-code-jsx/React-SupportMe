
export const Button = ({ type, className, children }) => {
    return (
        <button
            type={type}
            className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 ${className}`}
        >
            {children}
        </button>
    );
};
