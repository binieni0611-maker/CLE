import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo-purple.jpg" 
                  alt="웰니스코칭연구소" 
                  className="h-10 w-10 object-contain bg-white rounded-lg p-1"
                />
                <h3 className="text-xl font-bold">웰니스코칭연구소</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                THE 행복한 삶을 위한..
              </p>
              <p className="text-gray-400 text-sm">
                건강한 몸과 마음, 행복한 삶을 위한 전문 교육 기관
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">교육 프로그램</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-wellness-purple transition">
                  <a href="#coaching">코칭 교육</a>
                </li>
                <li className="hover:text-wellness-purple transition">
                  <a href="#church">교회 평생교육</a>
                </li>
                <li className="hover:text-wellness-purple transition">
                  <a href="#esg">ESG와 평생교육</a>
                </li>
                <li className="hover:text-wellness-purple transition">
                  <a href="#health">보건 교육</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>wellness@coaching.kr</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📱</span>
                  <span>010-XXXX-XXXX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>🕐</span>
                  <span>평일 09:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} 웰니스코칭연구소. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              교육학 박사 | 코칭심리사 | 간호사 출신 전문가
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
