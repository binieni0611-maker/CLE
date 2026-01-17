import React, { useState } from 'react';

const ESGPrograms = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = [
    {
      id: 'esg-edu',
      title: 'ESG 평생교육 프로그램',
      icon: '🌍',
      description: '인적자원개발 관점의 ESG 교육',
      topics: [
        'ESG 개념과 중요성',
        '지속가능한 조직문화 구축',
        'ESG 경영과 인재개발',
        '환경·사회적 책임 교육',
        'ESG 실천 전략 수립',
      ],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop',
    },
    {
      id: 'wellness-culture',
      title: '지속가능한 조직문화와 웰니스',
      icon: '🏢',
      description: '웰빙과 성과를 동시에 추구하는 조직문화',
      topics: [
        '직원 웰니스 프로그램 설계',
        '건강한 조직문화 만들기',
        '워라밸과 생산성 향상',
        '심리적 안전감 조성',
        '지속가능한 성장 전략',
      ],
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop',
    },
    {
      id: 'certification',
      title: 'ESG평생교육전문강사 양성과정',
      icon: '🏅',
      description: '공식 자격 과정 (제2024-006386호)',
      topics: [
        'ESG 교육 이론 및 실제',
        '평생교육 프로그램 기획',
        '교수학습 방법론',
        '교육 평가 및 환류',
        '강사 역량 개발',
        '자격증 취득 및 활동 지원',
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
      isCertification: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">ESG와 평생교육</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              지속가능한 미래를 위한 ESG 교육 및 전문강사 양성 프로그램입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id}
                className={`card hover:scale-105 transition-transform duration-300 ${
                  program.isCertification ? 'md:col-span-2 border-4 border-wellness-purple' : ''
                }`}
              >
                {program.isCertification && (
                  <div className="bg-wellness-purple text-white text-center py-2 -mt-6 -mx-6 mb-4 rounded-t-xl font-bold">
                    공식 자격 과정 - 자격명: ESG평생교육전문강사 (제2024-006386호)
                  </div>
                )}

                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-4xl mb-2 block">{program.icon}</span>
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{program.description}</p>

                <button
                  onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition mb-4 flex items-center"
                >
                  {expandedProgram === program.id ? '▲ 접기' : '▼ 교육 목차 보기'}
                </button>

                {expandedProgram === program.id && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-gray-800 mb-3">주요 교육 내용</h4>
                    <ul className="space-y-2">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-blue-600 font-bold">•</span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <a 
                  href="#contact"
                  className={`block ${
                    program.isCertification 
                      ? 'bg-wellness-purple hover:bg-purple-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg w-full text-center`}
                >
                  {program.isCertification ? '자격과정 문의하기' : '프로그램 문의하기'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGPrograms;
