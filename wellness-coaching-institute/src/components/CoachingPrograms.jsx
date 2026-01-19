import React, { useState } from 'react';

const CoachingPrograms = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = [
    {
      id: 'teaching',
      title: '코칭 교수법',
      icon: '👨‍🏫',
      description: '교육학 박사 전문성을 활용한 효과적인 코칭 교수법',
      topics: [
        '성인학습이론 기반 코칭 교수법',
        '학습자 중심 교육 설계',
        '교육 효과성 평가 방법',
        '교수-학습 전략 개발',
        '교육 프로그램 기획 및 운영',
      ],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop',
    },
    {
      id: 'self',
      title: '셀프 코칭',
      icon: '🎯',
      description: '코칭심리 전공 기반의 자기주도 성장 프로그램',
      topics: [
        '자기인식과 성찰 훈련',
        '목표설정 및 실행 전략',
        '내적 동기부여 강화',
        '감정조절 및 스트레스 관리',
        '자기효능감 향상 기법',
      ],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop',
    },
    {
      id: 'parent',
      title: '부모교육',
      icon: '👨‍👩‍👧‍👦',
      description: '발달심리와 코칭을 접목한 부모-자녀 관계 증진',
      topics: [
        '아동·청소년 발달 이해',
        '긍정적 양육 태도 및 기법',
        '부모-자녀 효과적 의사소통',
        '자녀의 자존감 향상 방법',
        '문제행동 이해와 대응',
      ],
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop',
    },
    {
      id: 'communication',
      title: '의사소통 교육',
      icon: '💬',
      description: '코칭 기반 효과적 소통법',
      topics: [
        '경청과 공감 기술',
        '비폭력 대화법 (NVC)',
        '갈등 해결 전략',
        '효과적인 피드백 방법',
        '관계 회복을 위한 소통',
      ],
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-lavender-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">코칭 교육</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              교육학 박사와 코칭심리사의 전문성이 결합된 체계적인 코칭 프로그램입니다.
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
                  className="text-wellness-purple font-semibold hover:text-purple-700 transition mb-4"
                >
                  {expandedProgram === program.id ? '▲ 접기' : '▼ 교육 목차 보기'}
                </button>

                {expandedProgram === program.id && (
                  <div className="bg-lavender-50 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-gray-800 mb-3">주요 교육 내용</h4>
                    <ul className="space-y-2">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-wellness-purple font-bold">•</span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <a 
                  href="#contact"
                  className="btn-primary w-full block text-center font-bold py-4 text-lg shadow-lg hover:shadow-xl"
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

export default CoachingPrograms;
