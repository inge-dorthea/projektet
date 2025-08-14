import React from "react";

type TextFieldProps = {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({ id, label, ...props }: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm">
        {label}:
      </label>
      <input
        id={id}
        {...props}
        className="py-1 px-2 rounded-xs border-1 border-gray-400 bg-gray-100 focus:outline-2 focus:outline-gray-500 disabled:text-gray-500"
        autoComplete="off"
      />
    </div>
  );
};

export default TextInput;
