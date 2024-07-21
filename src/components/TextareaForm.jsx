
export const TextareaForm = ({  id, type, placeholder, value, onChange, onBlur, required, className }) => {
    return(
        <textarea
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className}`}
    />
    )
}