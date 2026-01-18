# EmailJS 설정 가이드

웰니스코칭연구소 웹사이트의 문의 폼이 EmailJS를 통해 직접 이메일을 전송하도록 설정하는 가이드입니다.

## 📋 개요

문의 폼에서 사용자가 입력한 정보가 자동으로 binieni@hanmail.net로 전송됩니다.
- ✅ 이메일 앱 없이 직접 전송
- ✅ 실시간 전송 상태 확인
- ✅ 전송 실패 시 에러 메시지 표시

---

## 🚀 EmailJS 계정 설정 (1단계)

### 1. EmailJS 계정 생성
1. [https://www.emailjs.com](https://www.emailjs.com) 접속
2. **Sign Up** 클릭
3. 이메일 주소 입력 및 계정 생성
4. 이메일 인증 완료

### 2. Email Service 연결
1. EmailJS 대시보드 로그인
2. 왼쪽 메뉴에서 **Email Services** 클릭
3. **Add New Service** 버튼 클릭
4. **Gmail**, **Outlook**, 또는 **Yahoo** 선택 (추천: Gmail)
5. 계정 연결 및 인증 완료
6. Service ID 복사해서 메모 (예: `service_abc1234`)

### 3. Email Template 생성
1. 왼쪽 메뉴에서 **Email Templates** 클릭
2. **Create New Template** 버튼 클릭
3. 아래 템플릿 설정 적용:

#### Template Settings:
- **Template Name**: `wellness_coaching_inquiry`

#### Email Subject (제목):
```
[웰니스코칭연구소] {{from_name}}님의 문의
```

#### Email Body (본문):
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

이 메시지는 웰니스코칭연구소 웹사이트(wellness-coaching.co.kr)의 문의 폼을 통해 자동으로 전송되었습니다.
```

#### To Email (받는 사람):
```
binieni@hanmail.net
```

4. **Save** 버튼 클릭
5. Template ID 복사해서 메모 (예: `template_xyz5678`)

### 4. Public Key 확인
1. 왼쪽 메뉴에서 **Account** 클릭
2. **General** 탭에서 **Public Key** 확인
3. Public Key 복사해서 메모 (예: `abcDEF123xyz`)

---

## 🔧 웹사이트 환경 변수 설정 (2단계)

### 1. 로컬 개발 환경 (.env 파일)

프로젝트 루트 디렉토리에 `.env` 파일을 생성하고 아래 내용을 입력:

```bash
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=abcDEF123xyz
```

**주의**: 위 값들을 EmailJS에서 복사한 실제 값으로 변경하세요!

### 2. Vercel 배포 환경 설정

1. [Vercel 대시보드](https://vercel.com/dashboard) 접속
2. 프로젝트 선택 (wellness-coaching-institute)
3. **Settings** 탭 클릭
4. 왼쪽 메뉴에서 **Environment Variables** 클릭
5. 아래 환경 변수 3개를 추가:

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_abc1234` | Production, Preview, Development |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_xyz5678` | Production, Preview, Development |
| `VITE_EMAILJS_PUBLIC_KEY` | `abcDEF123xyz` | Production, Preview, Development |

6. **Save** 버튼 클릭
7. **Redeploy** 프로젝트 (환경 변수 적용을 위해 필수)

---

## ✅ 테스트 (3단계)

### 1. 로컬 테스트
```bash
cd wellness-coaching-institute
npm run dev
```

1. 브라우저에서 `http://localhost:3002` 접속
2. 페이지 하단의 **문의하기** 섹션으로 이동
3. 테스트 정보 입력:
   - 이름: 테스트
   - 이메일: test@example.com
   - 연락처: 010-1234-5678
   - 관심 분야: 코칭 교육
   - 문의 내용: 테스트 메시지입니다.
4. **문의하기** 버튼 클릭
5. "문의가 성공적으로 전송되었습니다!" 메시지 확인
6. binieni@hanmail.net 이메일함 확인

### 2. 배포 환경 테스트
1. [https://wellness-coaching.co.kr](https://wellness-coaching.co.kr) 접속
2. 위와 동일한 방법으로 테스트
3. 이메일 수신 확인

---

## 📊 EmailJS 사용량 제한

### 무료 플랜 (Free Plan)
- ✅ 월 200개 이메일 무료
- ✅ 모든 기본 기능 사용 가능
- ⚠️ EmailJS 로고 포함

### 유료 플랜 (필요 시)
- **Personal Plan**: $15/월, 1,000개 이메일
- **Business Plan**: $35/월, 5,000개 이메일
- **Pro Plan**: $65/월, 15,000개 이메일

현재 무료 플랜으로 충분할 것으로 예상됩니다.

---

## 🔍 트러블슈팅

### 문제 1: 이메일이 전송되지 않음
**해결방법**:
1. 브라우저 콘솔(F12)에서 에러 확인
2. EmailJS 대시보드에서 Service 연결 상태 확인
3. 환경 변수가 올바르게 설정되었는지 확인
4. Vercel에서 최신 배포 후 환경 변수가 적용되었는지 확인

### 문제 2: "전송 실패" 에러 메시지
**해결방법**:
1. EmailJS Service ID가 올바른지 확인
2. Template ID가 올바른지 확인
3. Public Key가 올바른지 확인
4. EmailJS 계정 상태 확인 (사용량 초과 여부)

### 문제 3: 이메일이 스팸함으로 감
**해결방법**:
1. binieni@hanmail.net에서 EmailJS 발신자를 수신 허용 목록에 추가
2. 첫 번째 이메일을 받은 후 "스팸 아님" 표시

### 문제 4: 로컬에서는 작동하지만 배포 환경에서 안 됨
**해결방법**:
1. Vercel 환경 변수가 올바르게 설정되었는지 재확인
2. Vercel에서 프로젝트 Redeploy 실행
3. 배포 로그 확인

---

## 📧 받는 이메일 형식 예시

```
제목: [웰니스코칭연구소] 홍길동님의 문의

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 문의자 정보
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 이름: 홍길동
📧 이메일: hong@example.com
📱 연락처: 010-1234-5678
📚 관심 분야: 코칭 교육

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 문의 내용
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

코칭 교육 프로그램에 관심이 있습니다.
자세한 일정과 비용을 알고 싶습니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

이 메시지는 웰니스코칭연구소 웹사이트(wellness-coaching.co.kr)의 문의 폼을 통해 자동으로 전송되었습니다.
```

---

## 🔐 보안 주의사항

1. **.env 파일은 절대 Git에 커밋하지 마세요**
   - 이미 `.gitignore`에 추가되어 있습니다
   
2. **Public Key는 공개되어도 안전합니다**
   - 클라이언트 측 코드에 포함되는 것이 정상입니다
   - Private Key가 아니므로 보안 문제 없음

3. **EmailJS 대시보드에서 Domain 제한 설정 (권장)**
   - EmailJS Dashboard → Account → Security
   - Allowed Domains에 `wellness-coaching.co.kr` 추가
   - 다른 도메인에서의 악용 방지

---

## 📝 체크리스트

설정을 완료했다면 아래 항목을 확인하세요:

- [ ] EmailJS 계정 생성 완료
- [ ] Email Service 연결 완료 (Gmail/Outlook)
- [ ] Email Template 생성 완료
- [ ] Service ID, Template ID, Public Key 확보
- [ ] 로컬 `.env` 파일 설정 완료
- [ ] Vercel 환경 변수 설정 완료
- [ ] Vercel 프로젝트 Redeploy 완료
- [ ] 로컬 환경 테스트 성공
- [ ] 배포 환경 테스트 성공
- [ ] binieni@hanmail.net에서 이메일 수신 확인

---

## 💡 추가 정보

### EmailJS 대시보드 모니터링
- EmailJS 대시보드에서 전송 이력 확인 가능
- 실패한 이메일 로그 확인 가능
- 월별 사용량 통계 확인 가능

### 커스터마이징
필요 시 아래 파일을 수정하여 이메일 폼을 커스터마이징할 수 있습니다:
- `/src/components/Contact.jsx` - 폼 UI 및 전송 로직

---

**문의사항이나 문제가 발생하면 이 문서를 참고하여 해결하세요!** 🚀
