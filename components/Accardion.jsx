import React, { useState } from 'react';

import AccardionArrowActiveIcon from '../public/icons/accardionArrowActive.svg';
import AccardionArrowIcon from '../public/icons/accardionArrow.svg';

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div key={item.title} className={`accordion  ${isActive && 'active'}`}>
        <button
          className="accordion-header"
          onClick={() => onTitleClick(index)}
        >
          {item.title} {isActive ? <AccardionArrowActiveIcon/> : <AccardionArrowIcon/>}
        </button>
        {isActive && (
          <div className="accordion-content">
            <p>{item.content}</p>
          </div>
        )}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;