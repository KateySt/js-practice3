import React from 'react';
import {Field, Form, Formik} from 'formik';
import {connect} from "react-redux";
import * as Yup from 'yup';
import './RegistrationForm.css';
import {postListUsers} from "../../storege/reducers";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(150, 'Too Long!')
        .required('Required'),
    phone: Yup.string()
        .required("Required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "Too short")
        .max(10, "Too long"),
});

const SignupForm = {
    id: Date.now(),
    name: '',
    phone: '',
};

const RegistrationForm = ({onSubmitFormik}) => {
    return (
        <Formik
            initialValues={SignupForm}
            validationSchema={SignupSchema}
            onSubmit={onSubmitFormik}>
            {({errors, touched}) => {
                return (<Form>

                        <label htmlFor="name">Name</label>
                        <br/>
                        <Field name="name" className="input" required/>
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <br/>

                        <label htmlFor="phone">Phone</label>
                        <br/>
                        <Field name="phone" type="phone" className="input" required/>
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                        <br/>

                        <button type="submit" className="submit">Submit</button>
                    </Form>
                )
            }}
        </Formik>
    );

};


function mapStateToProps({usersList}) {
    return {
        usersList: usersList,
    }
}

const mapDispatchToProps = {
    onSubmitFormik: postListUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);