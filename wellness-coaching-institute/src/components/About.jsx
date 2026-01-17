import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">대표자 소개</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-lavender-300 to-purple-300 rounded-2xl transform rotate-3"></div>
                <img 
                  src="/director-photo.jpg" 
                  alt="대표자 사진" 
                  className="relative rounded-2xl shadow-2xl w-full max-w-md"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-lavender-100 to-purple-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  이론과 실무를 겸비한 전문가
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-wellness-purple text-2xl">✓</span>
                    <div>
                      <h4 className="font-bold text-lg">교육학 박사</h4>
                      <p className="text-gray-600">평생교육 · 인적자원개발 전공</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-wellness-purple text-2xl">✓</span>
                    <div>
                      <h4 className="font-bold text-lg">코칭심리사</h4>
                      <p className="text-gray-600">코칭심리 전공 및 실무 경험</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-wellness-purple text-2xl">✓</span>
                    <div>
                      <h4 className="font-bold text-lg">간호사 출신</h4>
                      <p className="text-gray-600">현장 경험 기반 건강 전문가</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-lavender-200 rounded-xl p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-3">
                  전문성의 특별함
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="text-wellness-purple">•</span>
                    <span>학문적 깊이와 실무 전문성 동시 보유</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-wellness-purple">•</span>
                    <span>간호사 현장 경험 기반의 신뢰감</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-wellness-purple">•</span>
                    <span>코칭과 교육학의 통합적 접근</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-wellness-purple">•</span>
                    <span>발달심리와 건강관리의 융합</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
