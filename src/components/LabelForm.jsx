
export const LabelForm = ({ children, htmlFor }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {children}
    </label>
);