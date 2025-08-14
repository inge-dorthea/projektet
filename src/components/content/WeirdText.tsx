// this is the black box with text on all the pages

const WeirdText = ({ weird_text }: { weird_text: string }) => {
  // the text is sent through props as weird_text
  return (
    <p className="bg-black text-white w-fit px-2 tracking-[-0.09em] text-lg">
      {weird_text}
    </p>
  );
};

export default WeirdText;
