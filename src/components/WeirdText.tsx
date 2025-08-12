import React from "react";

const WeirdText = ({ weird_text }: { weird_text: string }) => {
  return (
    <p className="bg-black text-white w-fit px-2 tracking-[-0.09em] text-lg">
      {weird_text}
    </p>
  );
};

export default WeirdText;
