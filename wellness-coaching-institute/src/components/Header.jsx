import React, { useState } from 'react';

const Header = ({ setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: '홈' },
    { id: 'coaching', label: '코칭 교육' },
    { id: 'church', label: '교회 평생교육' },
    { id: 'esg', label: 'ESG와 평생교육' },
    { id: 'health', label: '보건 교육' },
    { id: 'contact', label: '문의하기' },
  ];

  const handleNavClick = (sectionId) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img 
              src="/logo-purple.jpg" 
              alt="웰니스코칭연구소" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-wellness-purple">
                웰니스코칭연구소
              </h1>
              <p className="text-xs text-gray-600 hidden md:block">
                THE 행복한 삶을 위한..
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 hover:text-wellness-purple transition duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-wellness-purple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2 text-gray-700 hover:text-wellness-purple hover:bg-lavender-50 px-4 rounded transition duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
