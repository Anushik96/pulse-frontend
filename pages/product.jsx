import { useState } from "react";
import SliderSingleProduct from "@/components/SliderSingleProduct";
import Select from 'react-select';
import Link from "next/link";
import useColorizeWord from "@/hooks/useColorizeWord";
import MainButton from "@/components/Button";
import LinkButton from "@/components/LinkButton";
import Accordion from "@/components/Accardion";
import ArrowIcon from '../public/icons/rightArrow.svg';
import Categories from "@/components/Categories";
import ProductsTab from "@/components/ProductsTab";
import PluseIcon from '../public/icons/pluseIcon.svg';
import MinuseIcon from '../public/icons/minuseIcon.svg'
import Bredcramp from "@/components/Bredcramp";
export default function Product() {
    const [selectedOption, setSelectedOption] = useState(null);
    const text = useColorizeWord('Recommanded Products', 0, 'colloeredWordMain');
    const popularCategory = useColorizeWord('Popular Categories', 0, 'colloeredWordMain');

    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorChange = (selectedOption) => {
      setSelectedColor(selectedOption);
    };
    const colorOptions = [
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'blue', label: 'Blue' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'purple', label: 'Purple' },
        { value: 'orange', label: 'Orange' },
      ];
    const options = [
        { value: 'red', label: 'red' },
        { value: 'green', label: 'green' },
        { value: 'yellow', label: 'yellow' },
      ];
      const items = [
        {
          title: 'Details',
          content: 'I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. The 12 subjects applied 4 mL of hand sanitizer for 30 seconds per application, 20 applications over a 30 min period (total exposure time 10 min).I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. The 12 subjects applied 4 mL of hand sanitizer for 30 seconds per application, 20 applications over a 30 min period (total exposure time 10 min).I ',
        },
        {
          title: 'Shipping & Return',
          content: 'I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. The 12 subjects applied 4 mL of hand sanitizer for 30 seconds per application, 20 applications over a 30 min period (total exposure time 10 min).I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. The 12 subjects applied 4 mL of hand sanitizer for 30 seconds per application, 20 applications over a 30 min period (total exposure time 10 min).I ',
        },
        
      ];
      const tabs = [
        {
          title: 'All',
          content: 'This is the content for tab 1.',
        },
        {
          title: 'Similar products',
          content: 'This is the content for tab 2.',
        },
        {
          title: 'Recently viewed',
          content: 'This is the content for tab 3.',
        },
      ];
    return (
      <div className="productPage">
        <Bredcramp/>
        <div className="productPage__info">
            <div className="productPage__slide">
                <SliderSingleProduct/>
            </div>
            <div className="productPage__details">
                <p className={`product__status available`}>Available</p>
                <h2 className="productPage__details--title">Official Samsung Tuned By AKG Wired </h2>
                <div className="productPage__details--quantity">
                    <div>
                        <p>Quantity</p>
                        <div className="quantity">
                            <button className="mainBtn"><MinuseIcon/></button>
                            <input type="text"/>
                            <button className="mainBtn"><PluseIcon/></button>
                        </div>
                    </div>
                    <p>Only <span>12 items</span> left !</p>
                </div>
                <div className="productPage__details-size-color">
                    <div>
                        <Select
                            className="size"
                            options={options}
                            value={selectedOption}
                            onChange={setSelectedOption}
                            />
                    </div>
                    <div>
                        <Select
                            value={selectedColor}
                            onChange={handleColorChange}
                            options={colorOptions}
                            placeholder="Select a color"
                            isSearchable={false}
                            menuPlacement="top"
                            className="colorSelect"
                        />
                        <div className="selectedColor" style={{ background: selectedColor?.value}}></div>
                    </div>
                </div>
                <div className="productPage__details-price">
                    <h4>Price:</h4>
                    <p>$10.95</p>
                </div>
                  <Link href='/checkout'>
                    <MainButton text='Buy Now'/>
                  </Link>
                <Accordion items={items}/>
            </div>
        </div>
        <div className="productPage__category">
            <div className="productPage__category--head">  
                <h2 className="productPage__category--title" dangerouslySetInnerHTML={{ __html: popularCategory }}></h2>
                <LinkButton text='See All'/>
            </div>
            <Categories/>
        </div>
        <div className="productPage__tab">
            <div className="productPage__tab--head">
                <h2 className="productPage__category--title" dangerouslySetInnerHTML={{ __html: text }}></h2>
                <LinkButton text='See All'/>
            </div>
            <ProductsTab tabs={tabs}/>
        </div>
    </div>
    );
  }
  
  