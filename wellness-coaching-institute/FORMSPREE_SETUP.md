# Formspree 설정 가이드 (간단 버전)

웰니스코칭연구소 문의 폼을 Formspree로 설정하는 가이드입니다.

## ⏱️ 설정 시간: 약 5분

---

## 🚀 1단계: Formspree 계정 생성

### 1-1. 웹사이트 접속
```
https://formspree.io
```

### 1-2. 회원가입
1. "Get Started" 또는 "Sign Up" 버튼 클릭
2. 이메일 주소 입력: `binieni@hanmail.net` (또는 원하는 이메일)
3. 비밀번호 설정
4. "Create Account" 클릭

### 1-3. 이메일 인증
1. 가입한 이메일(binieni@hanmail.net) 확인
2. Formspree에서 온 인증 이메일 열기
3. "Verify Email" 버튼 클릭

---

## 📝 2단계: 새 폼 생성

### 2-1. 폼 생성
1. Formspree 대시보드 로그인
2. "New Form" 또는 "+ New Project" 버튼 클릭
3. 폼 정보 입력:
   - **Form Name**: `웰니스코칭연구소 문의`
   - **Email**: `binieni@hanmail.net` (문의를 받을 이메일)
4. "Create Form" 클릭

### 2-2. Form Endpoint 복사
폼이 생성되면 **Form Endpoint**가 표시됩니다:
```
https://formspree.io/f/xxxxxxxx
```
이 URL을 복사하세요! (예: `https://formspree.io/f/xanyrkob`)

---

## 🔧 3단계: 코드에 Endpoint 적용

### 방법 1: 코드 직접 수정 (간단)

`src/components/Contact.jsx` 파일의 31번째 줄을 수정:

**현재:**
```javascript
const formspreeEndpoint = 'https://formspree.io/f/xanyrkob';
```

**변경:**
```javascript
const formspreeEndpoint = 'https://formspree.io/f/YOUR_ACTUAL_ENDPOINT';
```

`YOUR_ACTUAL_ENDPOINT`를 2-2단계에서 복사한 실제 endpoint로 변경하세요.

### 방법 2: 환경 변수 사용 (권장)

1. 프로젝트 루트에 `.env` 파일 생성
2. 다음 내용 추가:
```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ACTUAL_ENDPOINT
```

3. `Contact.jsx` 파일 수정:
```javascript
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xanyrkob';
```

---

## ✅ 4단계: 테스트

### 4-1. 로컬 테스트
```bash
npm run dev
```

### 4-2. 웹사이트에서 테스트
1. 문의 폼 페이지 열기
2. 모든 필드 작성
3. "문의하기" 버튼 클릭
4. "문의가 성공적으로 전송되었습니다!" 메시지 확인

### 4-3. 이메일 수신 확인
- binieni@hanmail.net 이메일함 확인
- Formspree에서 온 문의 이메일 확인

---

## 📊 Formspree 무료 플랜

### 제한사항:
- ✅ 월 50개 폼 제출 (충분함)
- ✅ 스팸 필터링
- ✅ 이메일 알림
- ⚠️ Formspree 로고 포함

### 유료 플랜 (필요 시):
- **Basic**: $10/월 - 1,000개 제출
- **Pro**: $40/월 - 10,000개 제출

---

## 🎯 Formspree 대시보드 기능

### 제출 내역 확인:
1. Formspree 대시보드 로그인
2. "Submissions" 탭 클릭
3. 모든 제출 내역 확인 가능

### 이메일 설정:
- **To Email**: 수신 이메일 변경 가능
- **Reply-to**: 자동 설정됨 (문의자 이메일)
- **Subject**: 커스터마이즈 가능

---

## 🔍 트러블슈팅

### 문제 1: "전송 실패" 에러
**해결방법:**
1. Formspree endpoint가 올바른지 확인
2. 인터넷 연결 확인
3. 브라우저 콘솔(F12)에서 에러 확인

### 문제 2: 이메일이 오지 않음
**해결방법:**
1. Formspree 대시보드에서 "To Email" 확인
2. 스팸 폴더 확인
3. Formspree "Submissions" 탭에서 제출 기록 확인

### 문제 3: 월 50개 제한 초과
**해결방법:**
1. Formspree 대시보드에서 사용량 확인
2. 필요 시 유료 플랜 업그레이드
3. 또는 다음 달까지 대기

---

## 📧 받는 이메일 형식

```
From: Formspree <noreply@formspree.io>
To: binieni@hanmail.net
Subject: [웰니스코칭연구소] 홍길동님의 문의

Name: 홍길동
Email: hong@example.com
Phone: 010-1234-5678
Interest: 코칭 교육
Message: 
코칭 교육 프로그램에 관심이 있습니다.
자세한 일정과 비용을 알고 싶습니다.

---
Sent via Formspree
```

---

## 🎉 완료!

이제 문의 폼이 작동합니다:
1. ✅ 사용자가 폼 작성
2. ✅ Formspree로 전송
3. ✅ binieni@hanmail.net로 이메일 도착
4. ✅ 성공 메시지 표시

---

## 💡 추가 팁

### Formspree vs EmailJS:
| 기능 | Formspree | EmailJS |
|------|-----------|---------|
| 설정 난이도 | ⭐ 매우 쉬움 | ⭐⭐⭐ 복잡 |
| 무료 제한 | 50개/월 | 200개/월 |
| 설정 시간 | 5분 | 20분+ |
| 커스터마이징 | 제한적 | 자유로움 |

### 보안:
- ✅ Formspree는 HTTPS로 안전하게 전송
- ✅ 스팸 필터링 자동 제공
- ✅ reCAPTCHA 추가 가능 (유료 플랜)

---

**문의사항이 있으시면 이 가이드를 참고하세요!** 🚀
