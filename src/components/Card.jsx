
export const Card = ({ children, className }) => {
  return (
    <div className={`bg-[#1E3A8A] shadow-lg rounded-lg ${className}`}>
      {children}
    </div>
  );
};