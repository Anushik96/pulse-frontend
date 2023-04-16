import Link from 'next/link';
import Image from 'next/image';
function  SingleCategory() {
    return (
      <div className="category">
        <Link href='#' className='category__name'>
            <h4>Corks</h4>
            <Image src="/icons/rightArrow.svg" alt="" />
        </Link>
        <div className='category__info'>
            <Image src="/images/comingSoon.png" alt="category ing" width="150px"  height="150px" />
            <ul className='category__sub'>
                <li className='category__sub-item'>
                  <Link href='#'>
                    Wine
                  </Link>
                </li>
                <li className='category__sub-item'>
                  <Link href='#'>
                    Brandy
                  </Link>
                 </li>
                 <li className='category__sub-item'>
                  <Link href='#'>
                    Silicone 
                  </Link>
                </li>
                <li className='category__sub-item'>
                  <Link href='#'>
                    Aluminuim 
                  </Link>
                </li>
                <li className='category__sub-item'>
                  <Link href='#'>
                    Aluminuim 
                  </Link>
                </li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default SingleCategory;
  