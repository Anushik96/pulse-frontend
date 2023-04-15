import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import VisaIcon from '../public/icons/visa.svg';
import ArcaIcon from '../public/icons/arca.svg';
import MasterIcon from '../public/icons/master.svg';
import IdramIcon from '../public/icons/idram.svg'

const PaymentSchema = Yup.object().shape({
  paymentType: Yup.string().required("Payment type is required"),
});

const PersonalInfoSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  companyName: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  city: Yup.string().required("City is required"),
  address: Yup.string().required("Address is required"),
  postcode: Yup.string().required("Postcode is required"),
});

const OrderSchema = Yup.object().shape({
  deliveryType: Yup.string().required("Delivery type is required"),
  notes: Yup.string(),
});
const PaymentDetails = () => {
  return (
    <>
      <div className="payment_details">
        <label className="custom-radio">
            <Field type="radio" name="paymentType" value="card" />
            <span className="checkmark"></span>
                Card payment
                <div className="cards">
                    <VisaIcon/>
                    <ArcaIcon/>
                    <MasterIcon/>
                </div>
        </label>


        <label className="custom-radio">
            <Field type="radio" name="paymentType" value="card" />
            <span className="checkmark"></span>
            Idram
            <IdramIcon/>
        </label>
        <ErrorMessage name="paymentType" component="div" className="error" />
      </div>
    </>
  );
};

const PersonalInfo = ({values}) => {
    const [phone, setPhone] = useState("");

  return (
    <div className="personal_info">
        <div className="form_group">
            <div className="field">
                <label htmlFor="firstName">First Name</label>
                <Field type="text" name="firstName" placeholder="Enter here"/>
                <ErrorMessage name="firstName" component="div" className="error" />
            </div>
            <div className="field">
                <label htmlFor="lastName">Last name</label>
                <Field type="text" name="lastName"  placeholder="Enter here"/>
                <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div className="field">
                <label htmlFor="companyName">Company Name</label>
                <Field type="text" name="companyName"  placeholder="Enter here"/>
                <ErrorMessage name="companyName" component="div" className="error" />
            </div>
        </div>
        <div className="form_group">
            <div className="field">
                <label htmlFor="email">Email Address</label>
                <Field type="email" name="email"  placeholder="Enter here"/>
                <ErrorMessage name="email" component="div" className="error" />
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
        <div className="form_group">
            <div className="field">
                <label htmlFor="city">City</label>
                <Field type="text" name="city"  placeholder="Enter here"/>
                <ErrorMessage name="city" component="div" className="error" />
            </div>
            <div className="field">
                <label htmlFor="address">Address line</label>
                <Field type="text" name="address" placeholder="Enter here" />
                <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div className="field">
                <label htmlFor="postcode">Post code</label>
                <Field type="text" name="postcode" placeholder="Enter here" />
                <ErrorMessage name="postcode" component="div" className="error" />
            </div>
        </div>
    </div>
)};

const AboutTheOrder = () => {
    return (
        <>
            <div className="about_order">
                <label className="custom-radio">
                    <Field type="radio" name="deliveryType" value="pickup" />
                    <span className="checkmark"></span>
                    I’m getting closer
                </label>
                <label className="custom-radio">
                    <Field type="radio" name="deliveryType" value="delivery" />
                    <span className="checkmark"></span>
                    I’m getting closer
                </label>
                <ErrorMessage name="deliveryType" component="div" className="error" />
            </div>
            <div className="field">
                <label htmlFor="notes">Notes:</label>
                <Field as="textarea" name="notes"  rows={6}/>
                <ErrorMessage name="notes" component="div" className="error" />
            </div>
        </>
    );
};

export default function OrderForm () {
    const initialValues = {
        paymentType: "",
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        postcode: "",
        deliveryType: "",
        notes: "",
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="checkout__form">
            <h2 className="checkout__form--title">Checkout</h2>
              <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={Yup.object().shape({
                    ...PaymentSchema.fields,
                    ...PersonalInfoSchema.fields,
                    ...OrderSchema.fields,
                    })}
                >
                {({ errors, touched, values }) => (
                <Form className="">
                    <div>
                        <h3 className="checkout__form--category">
                            <span>1</span>
                            Payment Details</h3>
                        <PaymentDetails />
                    </div>
                    <div>
                        <h3 className="checkout__form--category">
                            <span>2</span>
                            Personal Information</h3>
                        <PersonalInfo values={values}/>
                    </div>
                    <div>
                         <h3 className="checkout__form--category">
                            <span>3</span>
                            About the Order</h3>
                        <AboutTheOrder />
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    );
};