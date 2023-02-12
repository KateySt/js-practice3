import React from 'react';
import {Field, Form, Formik} from 'formik';
import './RegistrationForm.css';
import useRegistrationForm from "../../hooks/useRegistrationForm";
import {SignupSchema} from "./schema/SignupSchema";
import useCustomNavigate from "../../hooks/useCustomNavigate";

const RegistrationForm = (props) => {
    const {onSubmitFormik} = useRegistrationForm();

    const SignupForm = {
        name: props.user.name,
        phone: props.user.phone,
    };

    const navigate = useCustomNavigate();

    const onBackButtonClick = () => {
        navigate.goBack();
    }

    return (
        <Formik
            initialValues={SignupForm}
            validationSchema={SignupSchema}
            onSubmit={onSubmitFormik}>
            {({errors, touched, handleChange, values}) => {
                return (<Form>
                        {values.name &&
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
                                <button type="submit" className="submit">
                                    Submit
                                </button>
                            </>}
                        <button type="button" onClick={onBackButtonClick}>Go Back</button>
                    </Form>
                )
            }}
        </Formik>
    );
};

export default RegistrationForm;