import * as yup from 'yup'; // npm i yup

// schema with rules for the inputs, all being required for the form to submit data
const schema = yup.object().shape({
    Name: yup.string().required("Please write your name."),
    Email: yup.string().required("Please write your e-mail.").email("Please write a valid e-mail."),
    Topic: yup.string().required("Please write a topic for your message."),
    Message: yup.string().required("Please write a message.")
});

export default schema;