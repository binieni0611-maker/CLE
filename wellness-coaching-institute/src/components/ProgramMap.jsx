import React from 'react';

const ProgramMap = () => {
  const programCategories = [
    {
      id: 'coaching',
      title: '코칭 교육',
      icon: '👨‍🏫',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      programs: [
        '셀프 코칭 프로그램',
        '집단코칭 퍼실리테이션',
        '교수설계 역량강화',
        '프레젠테이션 스킬업'
      ],
      count: 4
    },
    {
      id: 'church',
      title: '교회 평생교육',
      icon: '⛪',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      programs: [
        '성인학습이론',
        '교회 평생교육 기획',
        '소그룹 리더 양성',
        '청년 멘토링'
      ],
      count: 4
    },
    {
      id: 'esg',
      title: 'ESG와 평생교육',
      icon: '🌍',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      programs: [
        'ESG 경영 이해와 실천',
        '지속가능발전교육(ESD)',
        '다문화사회와 평생교육',
        '평생교육사 자격과정 🏅'
      ],
      count: 4
    },
    {
      id: 'health',
      title: '보건 교육',
      icon: '❤️',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-300',
      programs: [
        '청소년 성교육',
        '스트레스 관리와 힐링',
        '보건 인문학',
        '중독 예방 교육',
        '심폐소생술(CPR)'
      ],
      count: 5
    }
  ];

  const handleCategoryClick = (categoryId) => {
    const section = document.getElementById(categoryId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-lavender-50 via-white to-purple-50" id="program-map">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">교육 프로그램 한눈에 보기</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              웰니스코칭연구소는 4개 분야에서 총 17개의 전문 교육 프로그램을 제공합니다
            </p>
          </div>

          {/* Program Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-purple-200">
              <div className="text-4xl font-bold text-wellness-purple mb-2">4</div>
              <div className="text-sm text-gray-600">교육 분야</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-green-200">
              <div className="text-4xl font-bold text-wellness-green mb-2">17</div>
              <div className="text-sm text-gray-600">전체 프로그램</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-sm text-gray-600">자격과정 🏅</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-pink-200">
              <div className="text-4xl font-bold text-pink-600 mb-2">맞춤형</div>
              <div className="text-sm text-gray-600">교육 설계</div>
            </div>
          </div>

          {/* Program Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {programCategories.map((category) => (
              <div 
                key={category.id}
                className={`${category.bgColor} border-2 ${category.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{category.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                      <p className="text-sm text-gray-600">{category.count}개 프로그램</p>
                    </div>
                  </div>
                  <div className={`bg-gradient-to-br ${category.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl`}>
                    {category.count}
                  </div>
                </div>

                {/* Programs List */}
                <div className="space-y-3">
                  {category.programs.map((program, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-lg p-3 flex items-center space-x-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${category.color}`}></div>
                      <span className="text-gray-700 text-sm font-medium">{program}</span>
                    </div>
                  ))}
                </div>

                {/* View More Button */}
                <div className="mt-6 text-center">
                  <button className={`bg-gradient-to-r ${category.color} text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300`}>
                    자세히 보기 →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-wellness-purple to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-3">
              맞춤형 교육 프로그램을 원하시나요?
            </h3>
            <p className="mb-6 text-purple-100">
              귀 기관의 요구사항에 맞는 커스터마이징 교육을 설계해드립니다
            </p>
            <a 
              href="#contact"
              className="inline-block bg-white text-wellness-purple font-bold py-4 px-8 rounded-lg hover:bg-purple-50 transition duration-300 shadow-lg hover:shadow-xl"
            >
              프로그램 문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramMap;
