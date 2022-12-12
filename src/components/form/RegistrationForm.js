import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';
import ListContact from "../list";

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
        .required("required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "too short")
        .max(10, "too long"),
});

class RegistrationForm extends React.Component {
    state = {
        input: '',
        isShow: false,
    }
    onShowForm = () => {
        this.setState({isShow: !this.state.isShow})
    }

    render() {
        return (
            <>
                <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        phone: '',
                    }}
                    validationSchema={SignupSchema}

                    onSubmit={(values) => {
                        this.setState({input: values})
                    }
                    }
                >
                    {({errors, touched}) => {
                        return (<Form>
                                {this.state.isShow &&
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
                                        <button type="submit">Submit</button>
                                    </>}
                                <button onClick={this.onShowForm}>
                                    {!this.state.isShow ?
                                        'Show form'
                                        :
                                        'Cancel'
                                    }
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
                <ListContact data={this.state.input}/>
            </>
        );
    };
};

export default RegistrationForm;