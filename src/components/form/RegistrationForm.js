import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';
import {ContextForm} from './context/ContextForm.js';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    surname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone: Yup.string()
        .required("Required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "Too short")
        .max(10, "Too long"),
});

const SignupForm = {
    name: '',
    surname: '',
    phone: '',
};

const RegistrationForm = (props) => {
    const [character, setCharacter] = useState({});
    const [isShow, setIsShow] = useState(false);

    const onShowForm = () => {
        setIsShow(!isShow);
    }

    const onSubmitFormik = (values) => {
        setCharacter(values);
    }

    return (
        <ContextForm.Provider value={character}>
            <Formik
                initialValues={SignupForm}
                validationSchema={SignupSchema}
                onSubmit={onSubmitFormik}>
                {({errors, touched}) => {
                    return (<Form>
                            {isShow &&
                                <>
                                    <label htmlFor="name">Name</label>
                                    <br/>
                                    <Field name="name" className="input" required/>
                                    {errors.name && touched.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}
                                    <br/>

                                    <label htmlFor="surname">Surname</label>
                                    <br/>
                                    <Field name="surname" className="input" required/>
                                    {errors.surname && touched.surname ? (
                                        <div>{errors.surname}</div>
                                    ) : null}
                                    <br/>

                                    <label htmlFor="phone">Phone</label>
                                    <br/>
                                    <Field name="phone" type="phone" className="input" required/>
                                    {errors.phone && touched.phone ? (
                                        <div>{errors.phone}</div>
                                    ) : null}
                                    <br/>

                                    <button type="submit" className="submit ">Submit</button>
                                </>}
                            <button onClick={onShowForm}>
                                {!isShow ?
                                    'Show form'
                                    :
                                    'Cancel'
                                }
                            </button>
                        </Form>
                    )
                }}
            </Formik>
            {props.children}
        </ContextForm.Provider>
    );

};

export default RegistrationForm;