export const ButtonForm = ({
  children,
  variant,
  className,
  disabled,
  ...props
}) => {
  const baseStyle =
    'inline-flex items-center justify-center rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm';
  const variants = {
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
    default: 'bg-indigo-600 text-white hover:bg-indigo-700',
  };
  const disabledStyle = 'bg-gray-800 text-gray-700 cursor-not-allowed';

  return (
    <button
      className={`${baseStyle} ${variants[variant] || variants.default} ${
        disabled ? disabledStyle : ''
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
