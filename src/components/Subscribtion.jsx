import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Subscribtion(){
  const initialValues = {
    email: '',
  };
    
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),
    });
    
  const handleSubmit = async (values, { setSubmitting, setStatus, resetForm }) => {
    try {
      const response = await axios.post('/api/subscribe', values);
          setStatus({ status: response.data.status, message: response.data.message });
          resetForm();
    } catch (error) {
          setStatus({ status: 'error', message: error.response.data.message });
    } finally {
          setSubmitting(false);
      }
  };
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}>
      {({ isSubmitting, status }) => (
        <Form>
          <Field className="subscribeInput" type="email" id="email" name="email" placeholder='Email address' required />
          <button className="mainBtn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </button>
          <ErrorMessage className="validationErr" name="email" component="div" />
          {status && status.message && (
            <div role="alert" className={`alert ${status.status}`}>
              {status.message}
            </div>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default Subscribtion