import SubmitButton from "./form-elements/SubmitButton";
import TextArea from "./form-elements/TextArea";
import TextInput from "./form-elements/TextInput";

const Form = ({ data }: { data: DataObjectType }) => {
  return (
    <section className="h-[100%] overflow-y-auto px-1">
      <form className="flex flex-col gap-2">
        <TextInput
          id="to"
          label="To"
          type="text"
          value={data.name}
          disabled={true}
        />
        <TextInput
          id="email_receiver"
          label="E-mail"
          type="email"
          value={data.email}
          disabled={true}
        />
        <hr className="my-2 text-gray-500" />
        <TextInput
          id="name"
          label="Name"
          type="text"
          placeholder="Write your name..."
        />
        <TextInput
          id="email_sender"
          label="E-mail"
          type="email"
          placeholder="Write your e-mail..."
        />
        <TextInput
          id="topic"
          label="Topic"
          type="text"
          placeholder="Write the topic..."
        />
        <TextArea />
        <SubmitButton />
      </form>
    </section>
  );
};

export default Form;
