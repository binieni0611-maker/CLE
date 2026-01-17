import React, { useState } from 'react';

const ChurchPrograms = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = [
    {
      id: 'lifecycle',
      title: '생애발달주기별 교육',
      icon: '📚',
      description: '평생교육 전공 기반의 생애주기별 맞춤 교육',
      topics: [
        '영유아기 신앙교육',
        '아동·청소년기 정체성 형성',
        '청년기 진로와 소명',
        '중년기 영적 성숙',
        '노년기 신앙과 삶의 의미',
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    },
    {
      id: 'senior',
      title: '시니어 교육',
      icon: '👴',
      description: '노년기 발달과 건강관리를 위한 통합 프로그램',
      topics: [
        '노년기 발달 특성 이해',
        '건강한 노화와 웰빙',
        '영적 성숙과 지혜',
        '세대 간 소통 방법',
        '의미 있는 노년기 설계',
      ],
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&auto=format&fit=crop',
    },
    {
      id: 'career',
      title: '진로교육',
      icon: '🎓',
      description: '인적자원개발 관점의 진로 설계',
      topics: [
        '자기이해와 강점 발견',
        '진로탐색 및 의사결정',
        '소명과 비전 수립',
        '역량 개발 계획',
        '진로전환 및 적응',
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
    },
    {
      id: 'grief-coaching',
      title: '애도 코칭 프로그램',
      icon: '🕊️',
      description: '기독교 세계관 기반의 상실과 애도 회복 프로그램',
      topics: [
        '상실과 애도의 이해 (기독교적 관점)',
        '슬픔의 단계와 건강한 애도 과정',
        '영적 위로와 회복',
        '신앙을 통한 의미 찾기',
        '소망과 부활 신앙으로의 전환',
      ],
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">교회 평생교육</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              평생교육 전문가가 설계한 생애주기별 맞춤 교육 프로그램입니다.
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
                  className="text-wellness-green font-semibold hover:text-green-700 transition mb-4"
                >
                  {expandedProgram === program.id ? '▲ 접기' : '▼ 교육 목차 보기'}
                </button>

                {expandedProgram === program.id && (
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-gray-800 mb-3">주요 교육 내용</h4>
                    <ul className="space-y-2">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-wellness-green font-bold">•</span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="bg-wellness-green hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg w-full">
                  프로그램 문의하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChurchPrograms;
