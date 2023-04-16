import React, { useState } from 'react';
import Image from 'next/image';
function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setLanguage] = useState('En');
  const languages = ['en', 'ru', 'am'];

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageClick = language => {
    setLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button className="language-dropdown-button" onClick={handleDropdownClick}>
        <Image src="/icons/languages.svg" alt="" />
        {currentLanguage}
      </button>
      {isOpen && (
        <div className="language-dropdown-menu">
          {languages.map(language => (
            <button
              key={language}
              className={`language-dropdown-item${currentLanguage === language ? ' active' : ''}`}
              onClick={() => handleLanguageClick(language)}
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;