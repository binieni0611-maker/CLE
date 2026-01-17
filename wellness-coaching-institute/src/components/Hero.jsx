import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 via-purple-50 to-wellness-cream"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-wellness-lavender rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
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
              <h3 className="font-bold text-lg mb-2">간호사 출신</h3>
              <p className="text-sm text-gray-600">건강 전문 지식 보유</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <a 
              href="#contact" 
              className="btn-primary inline-block text-lg"
            >
              상담 문의하기
            </a>
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
