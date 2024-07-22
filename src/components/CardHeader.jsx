
export const CardHeader = ({ children, className }) => {
    return (
        <div className={`border-b border-gray-200 ${className}`}>
            {children}
        </div>
    );
};