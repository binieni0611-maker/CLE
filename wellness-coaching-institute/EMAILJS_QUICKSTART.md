# EmailJS 빠른 설정 가이드 (Quick Setup)

## 🎯 완료된 작업
✅ EmailJS 패키지 설치 완료
✅ Contact.jsx 파일에 EmailJS 통합 완료
✅ 환경 변수 구조 설정 완료
✅ 에러 핸들링 및 로딩 상태 추가
✅ Git 커밋 및 푸시 완료

## 📋 다음 단계 (EmailJS 계정 설정)

### 1단계: EmailJS 계정 생성 (5분)
```
1. https://www.emailjs.com 접속
2. "Sign Up" 클릭하여 계정 생성
3. 이메일 인증 완료
```

### 2단계: Email Service 연결 (3분)
```
1. EmailJS 대시보드 로그인
2. "Email Services" 메뉴 클릭
3. "Add New Service" 클릭
4. Gmail, Outlook, 또는 Yahoo 선택
5. 계정 연결 및 인증
6. Service ID 복사 (예: service_abc1234)
```

### 3단계: Email Template 생성 (5분)
```
1. "Email Templates" 메뉴 클릭
2. "Create New Template" 클릭
3. 아래 내용 입력:
```

**제목:**
```
[웰니스코칭연구소] {{from_name}}님의 문의
```

**본문:**
```
웰니스코칭연구소에 새로운 문의가 접수되었습니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 문의자 정보
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 이름: {{from_name}}
📧 이메일: {{from_email}}
📱 연락처: {{phone}}
📚 관심 분야: {{interest}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 문의 내용
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**받는 사람 (To Email):**
```
binieni@hanmail.net
```

```
4. "Save" 클릭
5. Template ID 복사 (예: template_xyz5678)
```

### 4단계: Public Key 확인 (1분)
```
1. "Account" 메뉴 클릭
2. "General" 탭에서 "Public Key" 확인
3. Public Key 복사 (예: abcDEF123xyz)
```

### 5단계: Vercel 환경 변수 설정 (3분)
```
1. https://vercel.com/dashboard 접속
2. wellness-coaching-institute 프로젝트 선택
3. "Settings" → "Environment Variables" 클릭
4. 아래 3개 변수 추가:
```

| Name | Value (여기에 실제 값 입력) |
|------|--------------------------|
| `VITE_EMAILJS_SERVICE_ID` | service_abc1234 ← EmailJS에서 복사 |
| `VITE_EMAILJS_TEMPLATE_ID` | template_xyz5678 ← EmailJS에서 복사 |
| `VITE_EMAILJS_PUBLIC_KEY` | abcDEF123xyz ← EmailJS에서 복사 |

```
5. 모든 Environment 선택 (Production, Preview, Development)
6. "Save" 클릭
7. Deployments 탭으로 이동
8. 최신 배포 옆 "..." 메뉴 → "Redeploy" 클릭
```

### 6단계: 테스트 (2분)
```
1. https://wellness-coaching.co.kr 접속 (배포 후)
2. 페이지 하단 "문의하기" 섹션으로 이동
3. 테스트 정보 입력 후 제출
4. binieni@hanmail.net에서 이메일 확인
```

---

## ⚠️ 중요 참고사항

### 무료 플랜 제한
- 월 200개 이메일까지 무료
- 현재 사용량에 충분할 것으로 예상

### 트러블슈팅
**이메일이 안 오는 경우:**
1. Vercel 환경 변수가 올바른지 확인
2. Redeploy 했는지 확인
3. EmailJS Service 연결 상태 확인
4. 브라우저 콘솔(F12)에서 에러 확인

**이메일이 스팸함으로 가는 경우:**
- binieni@hanmail.net에서 EmailJS 발신자를 수신 허용 추가

---

## 📚 자세한 가이드
더 상세한 설명은 `EMAILJS_SETUP.md` 파일을 참고하세요.

---

## ✅ 완료 체크리스트
- [ ] EmailJS 계정 생성
- [ ] Email Service 연결 (Gmail/Outlook)
- [ ] Email Template 생성
- [ ] Service ID, Template ID, Public Key 확보
- [ ] Vercel 환경 변수 3개 설정
- [ ] Vercel 프로젝트 Redeploy
- [ ] 웹사이트에서 테스트
- [ ] 이메일 수신 확인

**설정 완료 예상 시간: 약 20분** ⏱️
