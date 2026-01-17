# 🌐 도메인 연결 완전 가이드

## 📋 목차
1. [Vercel에서 도메인 추가하기](#step-1-vercel에서-도메인-추가하기)
2. [가비아에서 DNS 설정하기](#step-2-가비아에서-dns-설정하기)
3. [연결 확인하기](#step-3-연결-확인하기)

---

## STEP 1: Vercel에서 도메인 추가하기

### 1-1. Vercel 프로젝트 설정 열기
1. https://vercel.com/binieni0611-makers-projects/cle 접속
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Domains** 클릭

### 1-2. 도메인 추가
1. 입력란에 구매한 도메인 입력
   - 예: `wellness-coaching.com`
   - 또는 `www.wellness-coaching.com`
2. **Add** 버튼 클릭

### 1-3. DNS 설정값 확인
Vercel이 다음과 같은 정보를 제공합니다:

**A 레코드 설정:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME 레코드 설정 (www용):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**⚠️ 이 정보를 메모하거나 화면을 캡처하세요!**

---

## STEP 2: 가비아에서 DNS 설정하기

### 2-1. 가비아 로그인
1. https://www.gabia.com 접속
2. 로그인

### 2-2. 도메인 관리 페이지 이동
1. **My가비아** 클릭
2. **서비스 관리** → **도메인**
3. 구매한 도메인 옆 **관리** 버튼 클릭

### 2-3. DNS 설정 변경
1. **DNS 관리** 또는 **DNS 정보** 클릭
2. **DNS 설정** 버튼 클릭

### 2-4. A 레코드 추가
```
호스트: @
레코드 종류: A
값/위치: 76.76.21.21
TTL: 3600 (기본값)
```
- **추가** 버튼 클릭

### 2-5. CNAME 레코드 추가 (www용)
```
호스트: www
레코드 종류: CNAME
값/위치: cname.vercel-dns.com
TTL: 3600 (기본값)
```
- **추가** 버튼 클릭

### 2-6. 저장
- **저장** 또는 **확인** 버튼 클릭

---

## STEP 3: 연결 확인하기

### 3-1. DNS 전파 대기
- ⏱️ **소요 시간**: 10분 ~ 24시간
- 🌍 보통 1-2시간이면 완료됩니다

### 3-2. Vercel에서 확인
1. https://vercel.com/binieni0611-makers-projects/cle/settings/domains 접속
2. 도메인 상태 확인:
   - ⏳ **Pending**: DNS 전파 중
   - ✅ **Valid**: 연결 완료!

### 3-3. 실제 접속 테스트
브라우저에서 도메인 입력:
- `https://wellness-coaching.com`
- `https://www.wellness-coaching.com`

✅ 웰니스코칭연구소 홈페이지가 나타나면 **성공!**

---

## 🔧 자주 발생하는 문제

### Q1: "Invalid Configuration" 오류
**해결:**
- DNS 설정이 올바른지 다시 확인
- A 레코드 값: `76.76.21.21` (정확히 입력)
- CNAME 값: `cname.vercel-dns.com` (정확히 입력)

### Q2: 24시간이 지나도 연결 안 됨
**해결:**
1. 가비아 고객센터 문의 (1544-4755)
2. DNS 설정 재확인
3. Vercel에서 도메인 삭제 후 다시 추가

### Q3: www 없이는 되는데 www는 안 됨
**해결:**
- CNAME 레코드 추가 확인
- Vercel에서 `www.wellness-coaching.com`도 추가

---

## 🎯 연결 체크리스트

### Vercel 설정
- [ ] Settings > Domains에서 도메인 추가
- [ ] DNS 설정값 메모 (A, CNAME)

### 가비아 설정
- [ ] A 레코드 추가 (@ → 76.76.21.21)
- [ ] CNAME 레코드 추가 (www → cname.vercel-dns.com)
- [ ] 설정 저장 완료

### 확인
- [ ] DNS 전파 대기 (1-24시간)
- [ ] Vercel에서 도메인 상태 "Valid" 확인
- [ ] 브라우저에서 실제 접속 테스트
- [ ] HTTPS (보안 연결) 자동 적용 확인

---

## 💡 추가 팁

### SSL 인증서 (HTTPS)
- ✅ Vercel이 **자동으로 무료 SSL** 제공
- 🔒 도메인 연결 후 자동으로 `https://` 적용
- 별도 설정 불필요!

### 도메인 리다이렉트
Vercel 설정에서 다음을 자동 처리:
- `www.wellness-coaching.com` → `wellness-coaching.com` (또는 반대)
- `http://` → `https://` (보안 연결 강제)

---

## 📞 도움이 필요하면

### 가비아 고객센터
- 📞 전화: 1544-4755
- ⏰ 운영시간: 평일 09:00-18:00
- 💬 1:1 문의: https://customer.gabia.com

### Vercel 지원
- 📧 이메일: support@vercel.com
- 📚 문서: https://vercel.com/docs

---

**도메인 연결이 완료되면 축하드립니다!** 🎉
이제 전문적인 웹사이트 주소로 홍보하실 수 있습니다!
