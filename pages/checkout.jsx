import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import useColorizeWord from '@/hooks/useColorizeWord';
import OrderForm from "@/components/PaymentForm"
import Bredcramp from "@/components/Bredcramp"
import MinuseIcon from "../public/icons/minuseIcon.svg";
import PluseIcon from "../public/icons/pluseIcon.svg";
import MainButton from '@/components/Button';
import LinkButton from '@/components/LinkButton';
import ProductsTab from '@/components/ProductsTab';

export default function Checkout(){
    const text = useColorizeWord('Recommanded Products', 0, 'colloeredWordMain');
    const tabs = [
        {
          title: 'Tab 1',
          content: 'This is the content for tab 1.',
        },
        {
          title: 'Tab 2',
          content: 'This is the content for tab 2.',
        },
        {
          title: 'Tab 3',
          content: 'This is the content for tab 3.',
        },
      ];
    const initialValues = {
        termsAndConditions: false,
      };
    
      const validationSchema = Yup.object().shape({
        termsAndConditions: Yup.boolean()
          .oneOf([true], 'You must accept the terms and conditions')
          .required('You must accept the terms and conditions'),
      });
    
      const handleSubmit = (values) => {
        // Do something with the form values
        console.log(values);
      };
  return (
    <div className='checkout'>
        <Bredcramp/>
        <div className='checkout__info'>   
            <OrderForm/>
            <div className='checkout__details'>
                <h3 className='checkout__details--title'>Your Order</h3>
                <div className='checkout__item'>
                    <Image className='checkout__item--img' src="/images/product.png" alt="Product" width={146} height={146}/>
                    <div className='checkout__item--info'>
                        <h4 className='checkout__item--info-title'>Title with two and more line. Second line </h4>
                        <div className='checkout__item--details'>
                            <p>Color:</p>
                            <p className='value'><span style={{background: 'green'}}></span>Green</p>
                            <p>Size: </p>
                            <p className='value'>XS</p>
                        </div>
                        <div className='checkout__quantity'>
                            <div className="quantity">
                                <button className="mainBtn"><MinuseIcon/></button>
                                <input type="text"/>
                                <button className="mainBtn"><PluseIcon/></button>
                            </div>
                            <p className='checkout__quantity--price'>1x.<span>200$</span></p>
                        </div>
                    </div>
                </div>
                <p className='checkout__item--price'>Shipment fee : <span>300 AMD</span></p>
                <p className='checkout__item--price'>Subtotal : <span>500,000 AMD</span></p>
                <h3 className='checkout__item--total'>Total : <span>300 $</span></h3>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    >
                    {({ values }) => (
                        <Form className='checkout__termsCondition'>
                            <label className='custom-checkbox'>
                                <Field type="checkbox" name="termsAndConditions" />
                                <span className="checkmark"></span>
                                <p> Accept our <a href="">Privacy & Policy</a> and <a href="">Terms and conditions</a></p>
                            </label>

                            <MainButton text="Confirm Order" disabled={!values.termsAndConditions}/>
                        </Form>
                    )}
                </Formik>
                <p className='checkout__description'>Your personal information will be used to process your order, support your experience on this site, and for other purposes described in our Privacy & Policy.</p>
            </div>
        </div>
        <div className="productPage__tab">
            <div className="productPage__tab--head">
                <h2 className="productPage__category--title" dangerouslySetInnerHTML={{ __html: text }}></h2>
                <LinkButton text='See All'/>
            </div>
            <ProductsTab tabs={tabs}/>
        </div>
    </div>
  )}