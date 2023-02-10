import React from 'react';
import {Field, Form, Formik} from 'formik';
import './RegistrationForm.css';
import {ContextForm} from './context/ContextForm.js';
import useRegistrationForm from "../../hooks/useRegistrationForm";
import {SignupSchema} from "./schema/SignupSchema";

const RegistrationForm = (props) => {

    const {character, isShow, onShowForm, onSubmitFormik} = useRegistrationForm();

    const SignupForm = {
        name: props.user.name,
        phone: props.user.phone,
    };

    return (
        <ContextForm.Provider value={character}>
            <Formik
                initialValues={SignupForm}
                validationSchema={SignupSchema}
                onSubmit={onSubmitFormik}>
                {({errors, touched, handleChange, values}) => {
                    return (<Form>
                            {isShow && values.name &&
                                <>
                                    <label htmlFor="name">Name</label>
                                    <br/>
                                    <Field name="name"
                                           className="input"
                                           placeholder="Name"
                                           value={values.name}
                                           onChange={handleChange}
                                           required/>
                                    {errors.name && touched.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}
                                    <br/>

                                    <label htmlFor="phone">Phone</label>
                                    <br/>
                                    <Field name="phone"
                                           type="phone"
                                           className="input"
                                           placeholder="0670011222"
                                           value={values.phone}
                                           onChange={handleChange}
                                           required/>
                                    {errors.phone && touched.phone ? (
                                        <div>{errors.phone}</div>
                                    ) : null}
                                    <br/>

                                    <button type="submit" className="submit">Submit</button>
                                </>}
                            <button type="button" onClick={onShowForm}>
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