import { SubmitHandler } from "react-hook-form"; // for use with yup validation

import useYupValidation from "@/hooks/useYupValidation/useYupValidation";
import { postData } from "@/app/data"; // for posting the message to a database

import SubmitButton from "./form-elements/SubmitButton";
import TextArea from "./form-elements/TextArea";
import TextInput from "./form-elements/TextInput";

type FormData = {
  // tried to move this to type.d.ts, but it wouldn't work
  Name: string;
  Email: string;
  Topic: string;
  Message: string;
};

const Form = ({ receiverData }: { receiverData: ObjectData }) => {
  const { register, handleSubmit, errors } = useYupValidation(); // validating the form

  // receiver-data as consts as the const data wouldn't take the raw versions
  const nameReceiver = receiverData.name;
  const emailReceiver = receiverData.email;

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    // gathering the data needed for the post
    const data = { nameReceiver, emailReceiver, formData };
    // converting the data to json
    const dataJson = JSON.stringify(data);

    // using postData to post the data to a database
    postData(dataJson);
  };

  return (
    <section className="h-[100%] overflow-y-auto px-1">
      <form id="form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        {/* handleSubmit handles the validation and passes the data along to onSubmit */}
        <TextInput
          id="to"
          label="Receiver"
          type="text"
          value={nameReceiver} 
          // this input field shows the user who they're messaging
          disabled={true}
        />
        <TextInput
          id="email_receiver"
          label="Receiver's e-mail"
          type="email"
          value={emailReceiver}
          // this input field shows the user the e-mail they're messaging
          disabled={true}
        />
        {/* the above input fields are disabled as they just show information */}
        <hr className="my-2 text-gray-500" />
        <TextInput
          id="name"
          label="Name"
          type="text"
          placeholder="Write your name..."
          {...register("Name")} // this input follows the rules for Name in the schema
          error={errors.Name?.message} 
          // if the input doesn't follow the rules, the error message will be displayed
        />
        <TextInput
          id="email_sender"
          label="E-mail"
          type="email"
          placeholder="Write your e-mail..."
          {...register("Email")} // this input follows the rules of Email in the schema
          error={errors.Email?.message}
          // if the input doesn't follow the rules, the error message will be displayed
        />
        <TextInput
          id="topic"
          label="Topic"
          type="text"
          placeholder="Write the topic..."
          {...register("Topic")} // this input follows the rules of Topic in the schema
          error={errors.Topic?.message}
          // if the input doesn't follow the rules, the error message will be displayed
        />
        <TextArea
          id="message"
          label="Message"
          rows={3}
          placeholder="Write your message..."
          {...register("Message")} // this input follows the rules of Message in the schema
          error={errors.Message?.message}
          // if the input doesn't follow the rules, the error message will be displayed
        />
        <SubmitButton />
      </form>
    </section>
  );
};

export default Form;
