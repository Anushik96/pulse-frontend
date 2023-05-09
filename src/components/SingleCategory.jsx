import { Link } from "react-router-dom";

import image from '../assets/images/comingSoon.png'
import { ReactComponent as ArrorIcon } from "../assets/icons/rightArrow.svg";

function  SingleCategory() {
    return (
      <div className="category">
        <Link>
            <h4>Corks</h4>
            <ArrorIcon/>
        </Link>
        <div>
            <img src={image} alt="category ing" width="150px"  height="150px" />
            <ul>
                <li>Wine</li>
                <li>Brandy </li>
                <li>Silicone </li>
                <li>Aluminuim </li>
                <li>Aluminuim </li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default SingleCategory;
  