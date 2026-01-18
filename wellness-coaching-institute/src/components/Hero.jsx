import React from 'react';

const Hero = ({ setCurrentSection }) => {
  const handleCategoryClick = (categoryId) => {
    // 해당 섹션으로 전환
    setCurrentSection(categoryId);
    // 페이지 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const programCategories = [
    {
      id: 'coaching',
      title: '코칭 교육',
      icon: '👨‍🏫',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      count: 4
    },
    {
      id: 'church',
      title: '교회 평생교육',
      icon: '⛪',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      count: 4
    },
    {
      id: 'esg',
      title: 'ESG와 평생교육',
      icon: '🌍',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      count: 4
    },
    {
      id: 'health',
      title: '보건 교육',
      icon: '❤️',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-300',
      count: 5
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 via-purple-50 to-wellness-cream"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-wellness-lavender rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Slogan */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            건강한 몸과 마음,
            <br />
            <span className="text-wellness-purple">행복한 삶을 위한 교육</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            웰니스코칭연구소는 이론과 실무를 겸비한 전문가가 이끄는
            <br className="hidden md:block" />
            신뢰할 수 있는 교육 기관입니다
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-wellness-purple text-4xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">교육학 박사</h3>
              <p className="text-sm text-gray-600">평생교육·인적자원개발 전공</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-wellness-purple text-4xl mb-3">💼</div>
              <h3 className="font-bold text-lg mb-2">코칭심리사</h3>
              <p className="text-sm text-gray-600">전문 코칭 자격 보유</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-wellness-purple text-4xl mb-3">⚕️</div>
              <h3 className="font-bold text-lg mb-2">간호사</h3>
              <p className="text-sm text-gray-600">현장 경험 보유</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 mb-16">
            <a 
              href="#contact" 
              className="btn-primary inline-block text-lg"
            >
              상담 문의하기
            </a>
          </div>
        </div>

        {/* Program Map - 화살표 위치에 배치 */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">교육 프로그램 한눈에 보기</h2>
            <p className="text-lg text-gray-600">
              4개 분야, 17개 전문 교육 프로그램
            </p>
          </div>

          {/* Program Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programCategories.map((category) => (
              <div 
                key={category.id}
                className={`${category.bgColor} border-2 ${category.borderColor} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Category Icon & Title */}
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.count}개 프로그램</p>
                </div>

                {/* View Button */}
                <button 
                  className={`w-full bg-gradient-to-r ${category.color} text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300`}
                >
                  자세히 보기 →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
