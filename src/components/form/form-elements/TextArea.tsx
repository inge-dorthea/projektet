import React from "react";

const TextArea = () => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="message" className="text-sm">
        Message:
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Write your message..."
        rows={3}
        className="resize-none py-1 px-2 rounded-xs border-1 border-gray-400 bg-gray-100 focus:outline-2 focus:outline-gray-500"
      ></textarea>
    </div>
  );
};

export default TextArea;
