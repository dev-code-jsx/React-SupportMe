
export const Avatar = ({ className, children }) => {
    return (
        <div className={`relative flex items-center justify-center rounded-full overflow-hidden bg-gray-200 ${className}`}>
            {children}
        </div>
    );
};