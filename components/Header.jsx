import { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from "next/image";
import SearchBar from "./Search";
import LanguageSwitcher from "./LanguageSwitcher";
import Categories from "./Categories";

import  CategoryIcon from '../public/icons/categories.svg'
import CloseIcon from '../public/icons/close.svg'
import MenuIcon from '../public/icons/hamburger.svg'

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const router = useRouter();

 const handleShowCategories = () => {
    setShowCategories(!showCategories)
  }

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
    return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__logo">
            <Link href="/">
              <img src="/images/logo.svg" alt="Pulse" />
            </Link>
            <button className={`categoryBtn ${showCategories && 'active'}`} onClick={handleShowCategories}>
                {showCategories ? <CloseIcon/> : <CategoryIcon/> }
                <p>{showCategories ? 'Close' : 'Categories'}</p>
            </button>
          </div>
          <div className={`nav__element  ${showNavbar && 'active'}`}>
            <ul className="header__menu">
              <li className="header__menu-item">
                <Link href="/" className={`header__menu-link ${router.pathname == '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li className="header__menu-item">
              <Link href="/about-us" className={`header__menu-link ${router.pathname == '/about-us' ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>
              <li className="header__menu-item">
              <Link href="/contacts" className={`header__menu-link ${router.pathname == '/contacts' ? 'active' : ''}`}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <SearchBar/>
          <div className={`header__item  ${showNavbar && 'active'}`}>
              <h4>Menu</h4>
              <LanguageSwitcher />  
          </div>
          <div className={`menu-icon  ${showNavbar && 'active'}`} onClick={handleShowNavbar}>
            {showNavbar ? <CloseIcon className="close-icon"/> : <MenuIcon/>}

            <p>{showNavbar ? 'Close' : 'Menu'}</p>
          </div>
        </nav>
      </header>
      { showCategories && <Categories withTitle={true}/> }
    </>
    );
  }
  
  