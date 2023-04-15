import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import { string, object } from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

export default function ContactForm() {
    const initialValues = {
        first_name: "",
        last_name: "",
        country: "",
        phone: "",
        message: "",
      };
      const [phone, setPhone] = useState("");

      const validationSchema = Yup.object().shape({
        first_name: Yup.string().required("Name is required"),
        last_name: Yup.string().required("Email is required"),
        country: Yup.string().required("Email is required"),
        phone: string().test("isValidPhoneNumber", "Invalid phone number", (value) => isValidPhoneNumber(value)).required("Phone number is required"),
        message: Yup.string().required("Message is required"),
      });   
    
      const handleSubmit = (values, { setSubmitting, resetForm }) => {
        // Handle form submission
        console.log(values);
        setSubmitting(false);
        resetForm();
      };
    
      return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
        {({ values, isSubmitting }) => (
            <Form>
             <div className='form_group'>
                <div className="field">
                    <label htmlFor="first_name">First Name</label>
                    <Field type="text" name="first_name" id="first_name" placeholder="Enter here" />
                    <ErrorMessage name="first_name" component="div" className="error" />
                </div>
    
                <div className="field">
                    <label htmlFor="last_name">Last Name</label>
                    <Field type="text" name="last_name" id="last_name" placeholder="Enter here"/>
                    <ErrorMessage name="last_name" component="div" className="error" />
                </div>

             </div>
             <div className='form_group'>
                <div className="field">
                    <label htmlFor="country">Country</label>
                    <Field type="text" name="country" id="country" placeholder="Enter here" />
                    <ErrorMessage name="country" component="div" className="error" />
                </div>

                <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <PhoneInput
                        name="phone"
                        id="phone"
                        placeholder="Enter here"
                        value={values.phone}
                        onChange={(value) => setPhone("phone", value)}
                        country={values.countryCode}
                        flags={flags}
                        defaultCountry="US"
                    />
                    <ErrorMessage name="phone" component="div" className="error" />
                </div>
            </div>
            <div className="field">
                <label htmlFor="message">Message</label>
                <Field as="textarea" name="message" id="message" rows={6}/>
                <ErrorMessage name="message" component="div" className="error" />
            </div>
    
            <button type="submit" disabled={isSubmitting} className='mainBtn'>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
        </Form>
          )}
     </Formik>
      );
};

