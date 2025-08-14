const TextArea = ({
  id,
  label,
  rows,
  placeholder,
  error,
  ...props
}: TextAreaProps) => {
  // many of the props are deconstructed,
  // but only because the {...props} wouldn't place the attributes

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm flex justify-between">
        {label}: 
        {/* the error message is displayed next to the label */}
        <span className="text-xs text-red-800 ps-2">{error}</span>
      </label>
      <textarea
        name={id}
        id={id}
        rows={rows}
        placeholder={placeholder}
        {...props} // {...register} is a part of {...props}
        className="resize-none py-1 px-2 rounded-xs border-1 border-gray-400 bg-gray-100 focus:outline-2 focus:outline-gray-500"
      ></textarea>
    </div>
  );
};

export default TextArea;
