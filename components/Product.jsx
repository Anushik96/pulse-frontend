
import MainButton from "./Button";
import Link from "next/link";
export default function Product({price, status, url}) {

  return (
    <div className="product">
        <p className={`product__status ${status}`}>{status}</p>   
        <img className="product__img" src="/images/product.png" alt="" />
        <div className="product__info">
            <h4 className="product__title">Title with two and more line. Second line </h4>
            { price && 
              <div className="product__price">
                <p>Price:</p>
                <h5>{price}</h5>
              </div>
            }
            <Link href={url ? url: '/products'}>
              <MainButton
                  disabled={false}
                  text="Order Now"
                  withIcon={true}
              />
            </Link>
           
        </div>
    </div>
  );
}

