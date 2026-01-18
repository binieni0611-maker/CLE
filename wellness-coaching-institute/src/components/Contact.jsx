import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 관심 분야 레이블 변환
    const interestLabels = {
      'coaching': '코칭 교육',
      'church': '교회 평생교육',
      'esg': 'ESG와 평생교육',
      'health': '보건 교육'
    };
    
    const interestLabel = formData.interest ? interestLabels[formData.interest] : '선택 안 함';
    
    // 이메일 본문 생성
    const emailBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
웰니스코칭연구소 문의
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 이름: ${formData.name}
📧 이메일: ${formData.email}
📱 연락처: ${formData.phone}
📚 관심 분야: ${interestLabel}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 문의 내용
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();
    
    // mailto 링크로 이메일 앱 열기
    const mailtoLink = `mailto:binieni@hanmail.net?subject=${encodeURIComponent(`[웰니스코칭연구소] ${formData.name}님의 문의`)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // 성공 메시지 표시
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-lavender-50 to-purple-50 min-h-screen" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">문의하기</h2>
            <p className="text-lg text-gray-600">
              웰니스코칭연구소에 관심을 가져주셔서 감사합니다.
              <br />
              궁금하신 사항이나 프로그램 문의사항을 남겨주세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">연락처 정보</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-wellness-purple text-2xl">📧</div>
                    <div>
                      <h4 className="font-bold text-gray-800">이메일</h4>
                      <p className="text-gray-600">binieni@hanmail.net</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-wellness-purple text-2xl">📱</div>
                    <div>
                      <h4 className="font-bold text-gray-800">전화</h4>
                      <p className="text-gray-600">010-8643-3155</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-wellness-purple text-2xl">🕐</div>
                    <div>
                      <h4 className="font-bold text-gray-800">운영시간</h4>
                      <p className="text-gray-600">평일 09:00 - 18:00</p>
                      <p className="text-gray-600 text-sm">(주말 및 공휴일 휴무)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-lavender-100 to-purple-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">주요 교육 분야</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">👨‍🏫</div>
                    <p className="text-sm font-medium">코칭 교육</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">⛪</div>
                    <p className="text-sm font-medium">교회 평생교육</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">🌍</div>
                    <p className="text-sm font-medium">ESG 교육</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">❤️</div>
                    <p className="text-sm font-medium">보건 교육</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">문의 폼</h3>
              
              {submitted ? (
                <div className="bg-green-100 border-2 border-green-500 rounded-lg p-8 text-center">
                  <div className="text-green-600 text-5xl mb-4">✓</div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">문의가 접수되었습니다!</h4>
                  <p className="text-green-700 mb-2">이메일 앱이 열렸습니다.</p>
                  <p className="text-green-600 text-sm">이메일 앱에서 '보내기'를 클릭해주세요.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-wellness-purple focus:outline-none transition"
                      placeholder="이름을 입력하세요"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-wellness-purple focus:outline-none transition"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-wellness-purple focus:outline-none transition"
                      placeholder="010-0000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">
                      관심 분야
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-wellness-purple focus:outline-none transition"
                    >
                      <option value="">선택해주세요</option>
                      <option value="coaching">코칭 교육</option>
                      <option value="church">교회 평생교육</option>
                      <option value="esg">ESG와 평생교육</option>
                      <option value="health">보건 교육</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      문의 내용 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-wellness-purple focus:outline-none transition resize-none"
                      placeholder="문의하실 내용을 자세히 작성해주세요"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-lg"
                  >
                    문의하기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
