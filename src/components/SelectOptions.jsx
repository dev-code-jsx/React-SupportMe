
export const SelectForm = ({ children, id }) => (
    <div className="relative mt-1">
        <select id={id} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            {children}
        </select>
    </div>
);

export const SelectTriggerForm = ({ children }) => (
    <>{children}</>
);

export const SelectValueForm = ({ placeholder }) => (
    <option value="" disabled>{placeholder}</option>
);

export const SelectContentForm = ({ children }) => (
    <>{children}</>
);

export const SelectItemForm = ({ children, value }) => (
    <option value={value}>{children}</option>
);