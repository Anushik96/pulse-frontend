import React, { useState } from 'react';
import SliderProduct from './SliderProduct';
export default  function ProductsTab({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTabClick = (index) => {
    setActiveIndex(index);
  };

  const renderedTabs = tabs.map((tab, index) => {
    const isActive = index === activeIndex;

    return (
      <div
        key={tab.title}
        className={`tab ${isActive ? 'active' : ''}`}
        onClick={() => onTabClick(index)}
      >
        {tab.title}
      </div>
    );
  });

  return (
    <div className="tab-container">
      <div className="tabs">{renderedTabs}</div>
      <div className="tab-content">
            <SliderProduct slidesToShow={4} slidesToShowResponcive={3}/>
      </div>
    </div>
  );
}