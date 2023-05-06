import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ArrowIcon from '../public/icons/arrow.svg';
import { domains } from '@/js/domains';
export default function Subscribtion({withIcon}){
  const initialValues = {
    email: '',
  };
    
  const validationSchema = Yup.object({
      email: Yup.string().email("Invalid email").test('is-valid-domain', 'Invalid email domain',(value) => {
          return validateEmailDomain(value, domains);
      }).required("Email is required"),
    });
   
  function validateEmailDomain(email, domains) {
    const domainParts = email.split('@');
    if (domainParts.length !== 2 || typeof domainParts[1] !== 'string') {
        return false; 
    }
    const topLevelDomain = domainParts[1].split('.').pop();
    return domains.includes(topLevelDomain);
}
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
          <Field className="subscribeInput" type="email" id="email" name="email" placeholder="Email address" required />

          <button className="mainBtn" type="submit" disabled={isSubmitting}>
            {withIcon ? <ArrowIcon/> : isSubmitting ? 'Submitting...' : 'Subscribe'}
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

