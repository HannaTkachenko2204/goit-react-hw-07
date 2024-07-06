import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";

const validationShema = Yup.object().shape({
  id: "",
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols")
    .max(50, "Name should be no more than 50 symbols")
    .required("Field must be filled in"),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "Phone must be in format: XXX-XX-XX"
    )
    .required("Field must be filled in"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  // const submit = (data) => {
  //   const newContact = { ...data, id: nanoid() };
  //   setContacts([...contacts, newContact]);
  // };

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ id: "", name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationShema}
    >
      <Form>
        <p className={css.formNameOfInput}>Name</p>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="span" />
        <p className={css.formNameOfInput}>Number</p>
        <Field type="text" name="number" />
        <ErrorMessage name="number" component="span" />
        <br />
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
