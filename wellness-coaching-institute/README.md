# 웰니스코칭연구소 공식 홈페이지

건강한 몸과 마음, 행복한 삶을 위한 전문 교육 기관

---

## 🌟 프로젝트 소개

웰니스코칭연구소는 교육학 박사, 코칭심리사, 간호사 출신 전문가가 운영하는 교육 기관입니다.

### 주요 특징
- 🎓 **교육학 박사**: 평생교육·인적자원개발 전공
- 💼 **코칭심리사**: 전문 코칭 자격 보유
- ⚕️ **간호사**: 현장 경험 보유

---

## 📚 교육 프로그램

### 1. 코칭 교육 (4개 프로그램)
- 코칭 교수법
- 셀프 코칭
- 부모교육
- 의사소통 교육

### 2. 교회 평생교육 (4개 프로그램)
- 생애발달주기별 교육
- 시니어 교육
- 진로교육
- 애도 코칭 프로그램 (기독교 세계관 기반)

### 3. ESG와 평생교육 (3개 프로그램)
- ESG 평생교육 프로그램
- 지속가능한 조직문화와 웰니스
- **ESG평생교육전문강사 양성과정** (자격명: ESG평생교육전문강사, 제2024-006386호)

### 4. 보건 교육 (5개 프로그램)
- 생애주기별 건강관리 (간호학 전문성 기반)
- 웰니스 프로그램 (몸과 마음의 통합적 건강)
- 예방중심 건강교육
- 중독예방 (흡연, 금연, 음주·약물 등)
- 자기돌봄

**총 16개 세부 프로그램**

---

## 🛠 기술 스택

### Frontend Framework
- **React 18.3.1**: 최신 React 기능 활용
- **Vite 7.3.1**: 빠른 개발 환경

### Styling
- **Tailwind CSS 3.4.17**: 유틸리티 우선 CSS 프레임워크
- **PostCSS 8.4.49**: CSS 후처리

### Design
- 모바일 우선 반응형 디자인
- 라벤더/보라색 계열 따뜻한 컬러 스킴

---

## 🚀 실행 방법

### 개발 환경 실행
```bash
cd wellness-coaching-institute
npm install
npm run dev
```

개발 서버: http://localhost:3002

### 프로덕션 빌드
```bash
npm run build
npm run preview
```

---

## 📞 연락처

- **이메일**: binieni@hanmail.net
- **전화**: 010-2069-3162
- **운영시간**: 평일 09:00 - 18:00 (주말 및 공휴일 휴무)

---

## 💬 문의하기 기능

홈페이지의 **문의하기 섹션**에서 폼을 작성하면:

### 작동 방식
1. 사용자가 폼 작성 (이름, 이메일, 연락처, 관심 분야, 문의 내용)
2. "문의하기" 버튼 클릭
3. **사용자의 기본 이메일 앱이 자동으로 열림**
4. 문의 내용이 이메일 본문에 자동으로 입력됨
5. 사용자가 이메일 앱에서 "보내기" 클릭
6. **binieni@hanmail.net**으로 이메일 전송됨

### 참고사항
- 사용자의 컴퓨터/모바일에 설치된 이메일 앱 필요
- Gmail, Outlook, Apple Mail 등 모든 이메일 앱 지원
- 웹 기반이므로 서버나 데이터베이스 불필요

### 향후 개선 (선택사항)
더 나은 경험을 위해 다음 서비스 도입 고려:
- **EmailJS**: 직접 이메일 전송 (무료 플랜: 월 200통)
- **Formspree**: 폼 제출 관리 (무료 플랜: 월 50건)
- **Google Forms 임베드**: 구글 스프레드시트로 자동 수집

---

## 🌐 배포

### Vercel 배포 완료
- **URL**: https://wellness-coaching.co.kr
- **대체 URL**: https://cle.vercel.app
- **자동 배포**: GitHub main 브랜치에 푸시 시 자동 배포

### 배포 설정
- Root Directory: `wellness-coaching-institute`
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

---

## 📂 프로젝트 구조

```
wellness-coaching-institute/
├── public/
│   ├── director-photo.jpg    # 대표자 사진
│   ├── logo-purple.jpg        # 보라색 로고
│   └── logo-green.jpg         # 녹색 로고
├── src/
│   ├── components/
│   │   ├── Header.jsx         # 헤더 (네비게이션)
│   │   ├── Hero.jsx           # 메인 히어로 섹션
│   │   ├── About.jsx          # 대표자 소개
│   │   ├── CoachingPrograms.jsx    # 코칭 교육
│   │   ├── ChurchPrograms.jsx      # 교회 평생교육
│   │   ├── ESGPrograms.jsx         # ESG와 평생교육
│   │   ├── HealthPrograms.jsx      # 보건 교육
│   │   ├── Contact.jsx        # 문의하기
│   │   └── Footer.jsx         # 푸터
│   ├── App.jsx                # 메인 앱
│   ├── main.jsx               # 진입점
│   └── index.css              # 글로벌 스타일
├── index.html                 # HTML 템플릿
├── package.json               # 의존성 관리
├── vite.config.js             # Vite 설정
├── tailwind.config.js         # Tailwind 설정
└── postcss.config.js          # PostCSS 설정
```

---

## ✨ 주요 기능

### 🎨 디자인
- 라벤더/보라색 테마
- 부드러운 그라데이션
- 깔끔한 카드 레이아웃
- 반응형 디자인

### 🔄 인터랙션
- 프로그램 카드 호버 효과
- 교육 목차 펼치기/접기
- 부드러운 스크롤
- 모바일 메뉴

### 📱 접근성
- 시맨틱 HTML
- 키보드 네비게이션
- 스크린 리더 지원
- 고대비 색상

---

## 📋 체크리스트

### 완료된 작업
- [x] React + Vite 프로젝트 생성
- [x] Tailwind CSS 설정
- [x] 반응형 디자인
- [x] 4개 교육 영역 (16개 세부 프로그램)
- [x] 대표자 소개 (전문성 강조)
- [x] 문의하기 폼 (이메일 연동)
- [x] GitHub 저장소 연결
- [x] Vercel 배포
- [x] 도메인 연결

### 향후 개선 (선택사항)
- [ ] EmailJS 등 직접 이메일 전송 기능
- [ ] 프로그램 상세 페이지
- [ ] 블로그/뉴스 섹션
- [ ] 수강 후기
- [ ] 온라인 등록/결제

---

## 🤝 기여

이 프로젝트는 웰니스코칭연구소의 공식 홈페이지입니다.

---

## 📄 라이선스

© 2026 웰니스코칭연구소. All rights reserved.

---

**건강한 몸과 마음, 행복한 삶을 위한 교육**
