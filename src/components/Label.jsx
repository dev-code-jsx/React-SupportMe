
export const Label = ({ htmlFor, children }) => {
    return (
        <label htmlFor={htmlFor} className="block text-lg font-medium text-white">
            {children}
        </label>
    );
};