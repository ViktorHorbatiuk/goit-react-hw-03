
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "../ContactForm/ContactForm.module.css"


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
        <Form className={css.container}>
          <label className={css.label}>
            Name:
            <Field className={css.input} type="text" name="name" />
          </label>
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="div"
          />
          <label className={css.label}>
            Number:
            <Field className={css.input} type="text" name="number" />
          </label>
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="div"
          />
          <button className={css.submitBtn} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
