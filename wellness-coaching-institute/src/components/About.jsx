import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">대표자 소개</h2>
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Photo - 왼쪽 */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-lavender-300 to-purple-300 rounded-xl transform rotate-3"></div>
                <img 
                  src="/director-photo.jpg" 
                  alt="대표자 사진" 
                  className="relative rounded-xl shadow-xl w-full"
                />
              </div>
            </div>

            {/* Content - 오른쪽 */}
            <div className="lg:col-span-8 space-y-5">
              {/* 주요 자격 */}
              <div className="bg-gradient-to-r from-lavender-100 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  이론과 실무를 겸비한 전문가
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-wellness-purple text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800">교육학 박사</h4>
                      <p className="text-sm text-gray-600">평생교육·인적자원개발</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <span className="text-wellness-purple text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800">코칭심리사</h4>
                      <p className="text-sm text-gray-600">코칭심리 전공</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <span className="text-wellness-purple text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800">간호사</h4>
                      <p className="text-sm text-gray-600">현장 경험 보유</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 전문성과 저서를 나란히 배치 */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* 전문성 */}
                <div className="bg-white border-2 border-lavender-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="text-lg mr-2">💎</span>
                    전문성의 특별함
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-wellness-purple mt-1">•</span>
                      <span>학문적 깊이와 실무 전문성 동시 보유</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-wellness-purple mt-1">•</span>
                      <span>현장 경험 기반의 신뢰감</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-wellness-purple mt-1">•</span>
                      <span>코칭과 교육학의 통합적 접근</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-wellness-purple mt-1">•</span>
                      <span>발달심리와 건강관리의 융합</span>
                    </li>
                  </ul>
                </div>

                {/* 저서 */}
                <div className="bg-gradient-to-br from-purple-50 to-lavender-50 border-2 border-purple-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="text-lg mr-2">📚</span>
                    저서
                  </h4>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <h5 className="font-bold text-gray-800 text-sm">평생교육방법론</h5>
                      <p className="text-xs text-gray-600">2023, 양성원</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <h5 className="font-bold text-gray-800 text-sm">지역사회를 위한 교회평생교육</h5>
                      <p className="text-xs text-gray-600">2023, 지우</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
