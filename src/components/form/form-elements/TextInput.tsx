type TextFieldProps = {
  id: string;
  label: string;
  error?: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({ id, label, error, ...props }: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm flex justify-between">
        {label}: <span className="text-xs text-red-800 ps-2">{error}</span>
      </label>
      <input
        id={id}
        {...props}
        className="py-1 px-2 rounded-xs border-1 border-gray-400 bg-gray-100 focus:outline-2 focus:outline-gray-500 disabled:text-gray-500 disabled:border-gray-300"
        autoComplete="off"
      />
    </div>
  );
};

export default TextInput;
