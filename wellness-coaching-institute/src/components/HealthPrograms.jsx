import React, { useState } from 'react';

const HealthPrograms = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = [
    {
      id: 'lifecycle-health',
      title: '생애주기별 건강관리',
      icon: '❤️',
      description: '간호학 전문성 기반의 맞춤 건강 교육',
      topics: [
        '영유아 건강 및 발달',
        '청소년 성장과 건강',
        '성인기 건강 관리',
        '중년기 만성질환 예방',
        '노년기 건강한 노화',
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    },
    {
      id: 'wellness',
      title: '웰니스 프로그램',
      icon: '🧘‍♀️',
      description: '몸과 마음의 통합적 건강',
      topics: [
        '신체적 웰니스 (운동, 영양)',
        '정서적 웰니스 (스트레스 관리)',
        '사회적 웰니스 (관계 건강)',
        '영적 웰니스 (삶의 의미)',
        '통합적 건강 증진 전략',
      ],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop',
    },
    {
      id: 'prevention',
      title: '예방중심 건강교육',
      icon: '🛡️',
      description: '질병 예방과 건강 증진',
      topics: [
        '만성질환 예방 교육',
        '건강검진의 중요성',
        '생활습관 개선 전략',
        '감염병 예방 관리',
        '응급처치 교육',
      ],
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop',
    },
    {
      id: 'addiction',
      title: '중독예방',
      icon: '🚭',
      description: '다양한 중독 문제의 이해와 예방',
      topics: [
        '흡연 예방 교육',
        '금연 프로그램',
        '음주·약물 중독 이해',
        '인터넷·게임 중독 예방',
        '중독의 심리적 메커니즘',
        '가족과 함께하는 회복',
        '건강한 습관 형성',
      ],
      image: '/brain-neural-network.jpg',
    },
    {
      id: 'self-care',
      title: '자기돌봄',
      icon: '💆‍♀️',
      description: '나를 위한 건강한 돌봄 실천',
      topics: [
        '자기돌봄의 중요성',
        '신체적 자기돌봄 실천',
        '정서적 자기돌봄 방법',
        '번아웃 예방과 회복',
        '건강한 경계 설정',
      ],
      image: '/self-care-meditation.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-pink-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">보건 교육</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              간호사 출신 전문가가 제공하는 신뢰할 수 있는 건강 교육 프로그램입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id}
                className="card hover:scale-105 transition-transform duration-300"
              >
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
                  className="text-pink-600 font-semibold hover:text-pink-800 transition mb-4"
                >
                  {expandedProgram === program.id ? '▲ 접기' : '▼ 교육 목차 보기'}
                </button>

                {expandedProgram === program.id && (
                  <div className="bg-pink-50 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-gray-800 mb-3">주요 교육 내용</h4>
                    <ul className="space-y-2">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-pink-600 font-bold">•</span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <a 
                  href="#contact"
                  className="block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl w-full text-center text-lg"
                >
                  프로그램 문의하기
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPrograms;
