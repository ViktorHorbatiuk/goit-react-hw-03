
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact({ ...values, id: nanoid() });
        resetForm();
      }}
    >
      {() => (
        <Form>
          <label>
            Name:
            <Field type="text" name="name" />
          </label>
          <ErrorMessage name="name" component="div" />
          <label>
            Number:
            <Field type="text" name="number" />
          </label>
          <ErrorMessage name="number" component="div" />
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
