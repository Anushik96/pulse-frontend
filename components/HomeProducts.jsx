import useColorizeWord from '../hooks/useColorizeWord';
import SliderProduct from './SliderProduct';
import LinkButton from './LinkButton';
import Link from 'next/link';
export default function HomeProduct() {
    const text = useColorizeWord('Wine packaging accessories', 1, 'colloeredWordMain');

  return (
    <div className="homeProduct">
        <div className='homeProduct__category'>
            <h2 className="homeProduct__category--title" dangerouslySetInnerHTML={{ __html: text }}></h2>
            <p className="homeProduct__category--desc">Lorem ipsum dolor sit amet consectetur. Mus sed augue fames tristique mi elementum volutpat magna. Ut non enim dui vitae egestas justo aliquet sed suspendisse. Iaculis pharetra commodo cras fringilla facilisis ullamco. Lorem ipsum dolor sit amet consectetur. Mus sed augue fames tristique mi elementum volutpat magna. Ut non enim dui vi</p>
            <Link href="/products"><LinkButton text="View All"/></Link>
        
            <div className='homeProduct__categories'>
                <SliderProduct slidesToShow={3} slidesToShowResponcive={2}/>
            </div>
        </div>
        <div className='homeProduct__title' data-img="../public/images/homeProduct.png">
            <h3>Title</h3>
            <p className='homeProduct__title--desc'>Lorem ipsum dolor sit amet consectetur. Mus sed augue fames tristique mi elementum volutpat magna. Ut non enim dui vitae egestas justo aliquet sed suspendisse. Iaculis pharetra commodo cras fringilla facilisis ullamco</p>
        </div>
    </div>
  );
}

