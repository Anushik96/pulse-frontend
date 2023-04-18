import Bredcramp from "@/components/Bredcramp";
import Product from "@/components/Product";
import FilterItem from "@/components/FilterItem";
import FilerCloseIcon from '../public/icons/filterClose.svg';
import FilterIcon from '../public/icons/filter.svg';
import { useState } from "react";
export default function Products() {
    const [showFilter, setShowFilter] = useState(false)
    const products = [1,2,3,4,5,6,78,52];
    const filterRadio = ['All', 'Available', 'Out of stock'];
    const filterCheckbox = ['Corks', 'Covers', 'Filters', 'Yeasts', 'Wax', 'Bottles', 'Flavoring agents', 'Dairy equipment', 'Concentrates', 'Juicing accessories'];
    const filterCheckboxSub = ['Cartridge', 'Cardboard', 'To the candle', 'Aluminuim'];


    return (
      <div className="products">
            <div className="products__header">
                <h1 className="products__header--title">Explore our products</h1>
                <p className="products__header--desc">The team of Direlli LLC consists of more than 20 people. Our style is the speed of execution and the benefit of the company&apos;s customers, but first of all — love of our work. This helps us to successfully create digital products for business since its </p>
            </div>
            <div>
                <Bredcramp/>
                <div className="products__content">
                    <div className={`products__content--filter ${showFilter && 'active'}`}>
                        <div className="products__content--filter-head">
                            <h4>Filters</h4>
                            <button>
                            <FilerCloseIcon onClick={() => setShowFilter(!showFilter)}/>
                            </button>
                        </div>
                        <div className="products__content--filter-category">
                            <p>Availability</p>
                            { filterRadio.map((item, i) => {
                                return(
                                    <FilterItem 
                                        key={i}
                                        type='radio' 
                                        label={item}
                                        name={'radio'}
                                    />
                                )
                            })}
                        </div>
                        <div className="products__content--filter-category">
                            <p>Categories</p>
                            { filterCheckbox.map((item, i) => {
                                return(
                                    <FilterItem 
                                        key={i}
                                        type='checkbox' 
                                        label={item}
                                    />
                                )
                            })} 
                        </div>
                        <div className="products__content--filter-category">
                            <p>Sub categories</p>
                            { filterCheckboxSub.map((item, i) => {
                                return(
                                    <FilterItem 
                                        key={i}
                                        type='checkbox' 
                                        label={item}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="products__list">
                        <div className="products__info">
                            <p>Products</p>
                            <p>(165)</p>
                        </div>
                        <button onClick={()=> setShowFilter(!showFilter)} className="products__list--openFiler">
                            <FilterIcon/>
                            Open Filters
                        </button>
                        <div className="products__list--items">
                            {products.map((item, i)=>{
                                return(
                                    <Product
                                        key={i}
                                        price='6,000 AMD'
                                        status="available"
                                        url="/product"
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
