import SubmitButton from "./form-elements/SubmitButton";
import TextArea from "./form-elements/TextArea";
import TextInput from "./form-elements/TextInput";

import { SubmitHandler } from "react-hook-form";
import useYupValidation from "@/hooks/useYupValidation";

type FormData = {
  Name: string;
  Email: string;
  Topic: string;
  Message: string;
}

const Form = ({ data }: { data: DataObjectType }) => {

  const { register, handleSubmit, errors } = useYupValidation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <section className="h-[100%] overflow-y-auto px-1">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <TextInput
          id="to"
          label="Receiver"
          type="text"
          value={data.name}
          disabled={true}
        />
        <TextInput
          id="email_receiver"
          label="Receiver's e-mail"
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
          {...register("Name")}
          error={errors.Name?.message}
        />
        <TextInput
          id="email_sender"
          label="E-mail"
          type="email"
          placeholder="Write your e-mail..."
          {...register("Email")}
          error={errors.Email?.message}
        />
        <TextInput
          id="topic"
          label="Topic"
          type="text"
          placeholder="Write the topic..."
          {...register("Topic")}
          error={errors.Topic?.message}
        />
        <TextArea
          id="message"
          label="Message"
          rows={3}
          placeholder="Write your message..."
          {...register("Message")}
          error={errors.Message?.message}
        />
        <SubmitButton />
      </form>
    </section>
  );
};

export default Form;
