import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
    const dispatch = useDispatch();
    const nameId = useId();
    const numberId = useId();

    const contactSchema = Yup.object().shape({
        name: Yup.string()
            .trim()
            .min(3, 'Must be at least 3 characters long')
            .max(50, 'Must be less than 50 characters long')
            .required("Required"),
        number: Yup.string()
            .trim()
            .min(3, 'must be at least 3 characters long')
            .max(50, 'must be less than 50 characters long')
            .required("Required"),
    });

    const initialValues = {
        name: '',
        number: '',
    };
    
    const onAddContact = (values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={onAddContact}
            >
                <Form className={css.form}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
                    <ErrorMessage name="name" component="span" className={css.error} />

                    <label htmlFor={numberId}>Number</label>
                    <Field type="tel" name="number" id={numberId} />
                    <ErrorMessage name="number" component="span" className={css.error} />

                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;