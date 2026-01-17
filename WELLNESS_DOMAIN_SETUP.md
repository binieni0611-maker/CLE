# 🌐 wellness-coaching.co.kr 도메인 연결 가이드

## ✅ 구매한 도메인
- **도메인**: `wellness-coaching.co.kr`
- **업체**: 가비아 (추정)
- **목표**: Vercel에 연결하여 홈페이지 운영

---

## 📋 STEP 1: Vercel에서 도메인 추가

### 1-1. Vercel 프로젝트 설정 열기
1. 🔗 https://vercel.com/binieni0611-makers-projects/cle 접속
2. 상단의 **"Settings"** 탭 클릭
3. 왼쪽 메뉴에서 **"Domains"** 클릭

### 1-2. 도메인 2개 추가

#### 첫 번째 도메인 (메인)
```
wellness-coaching.co.kr
```
- 입력란에 위 도메인 입력
- **Add** 버튼 클릭

#### 두 번째 도메인 (www)
```
www.wellness-coaching.co.kr
```
- 다시 입력란에 위 도메인 입력
- **Add** 버튼 클릭

### 1-3. DNS 설정값 확인

Vercel이 다음과 같은 정보를 표시합니다:

**⚠️ 이 값들을 메모하거나 화면을 캡처하세요!**

예상 설정값:
```
A 레코드:
Type: A
Name: @
Value: 76.76.21.21

CNAME 레코드 (www용):
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📋 STEP 2: 가비아에서 DNS 설정

### 2-1. 가비아 로그인
1. 🔗 https://www.gabia.com 접속
2. 우측 상단 **로그인**

### 2-2. 도메인 관리로 이동
1. **My가비아** 클릭
2. **서비스 관리** 클릭
3. **도메인** 선택
4. `wellness-coaching.co.kr` 옆 **관리** 버튼 클릭

### 2-3. DNS 설정 페이지 열기
1. **DNS 관리** 또는 **DNS 정보** 탭 클릭
2. **DNS 설정** 버튼 클릭

### 2-4. 기존 레코드 확인
- 기본적으로 A 레코드나 CNAME이 있을 수 있음
- **기존 A 레코드는 삭제하거나 수정**

### 2-5. A 레코드 추가 (메인 도메인)

**설정값:**
```
호스트(Host): @
레코드 종류(Type): A
값/위치(Value): 76.76.21.21
TTL: 3600 (기본값, 또는 1시간)
```

**입력 방법:**
1. **호스트** 입력란에 `@` 입력
2. **타입** 또는 **레코드 종류**에서 `A` 선택
3. **값** 또는 **위치**에 `76.76.21.21` 입력
4. TTL은 기본값 유지 (3600)
5. **추가** 또는 **저장** 버튼 클릭

### 2-6. CNAME 레코드 추가 (www 도메인)

**설정값:**
```
호스트(Host): www
레코드 종류(Type): CNAME
값/위치(Value): cname.vercel-dns.com
TTL: 3600 (기본값, 또는 1시간)
```

**입력 방법:**
1. **호스트** 입력란에 `www` 입력
2. **타입** 또는 **레코드 종류**에서 `CNAME` 선택
3. **값** 또는 **위치**에 `cname.vercel-dns.com` 입력
4. TTL은 기본값 유지 (3600)
5. **추가** 또는 **저장** 버튼 클릭

### 2-7. 설정 저장 확인
- **저장** 또는 **확인** 버튼 클릭
- 설정이 저장되었는지 확인

---

## ⏱️ STEP 3: DNS 전파 대기

### 소요 시간
- **최소**: 10분
- **평균**: 1-2시간
- **최대**: 24시간

### 현재 상태 확인 방법

#### 방법 1: Vercel 대시보드
1. https://vercel.com/binieni0611-makers-projects/cle/settings/domains
2. 도메인 상태 확인:
   - ⏳ **Pending**: DNS 전파 중
   - ✅ **Valid**: 연결 완료!

#### 방법 2: DNS 전파 확인 사이트
1. 🔗 https://www.whatsmydns.net 접속
2. 도메인 입력: `wellness-coaching.co.kr`
3. 레코드 타입: `A` 선택
4. **Search** 클릭
5. 전 세계 DNS 서버에서 `76.76.21.21` 표시되면 완료

---

## ✅ STEP 4: 연결 확인

### 4-1. Vercel에서 확인
1. https://vercel.com/binieni0611-makers-projects/cle/settings/domains
2. 두 도메인 모두 **"Valid"** 상태 확인:
   - `wellness-coaching.co.kr` ✅
   - `www.wellness-coaching.co.kr` ✅

### 4-2. 브라우저에서 접속 테스트

**테스트 URL:**
```
https://wellness-coaching.co.kr
https://www.wellness-coaching.co.kr
```

**확인 사항:**
- ✅ 웰니스코칭연구소 홈페이지가 표시됨
- ✅ HTTPS (자물쇠 아이콘) 자동 적용
- ✅ 이미지 정상 표시
- ✅ 모든 섹션 정상 작동
- ✅ 모바일에서도 확인

---

## 🔒 SSL 인증서 (HTTPS)

### 자동 적용
- ✅ Vercel이 **무료 SSL 인증서** 자동 발급
- ✅ `https://` 자동 적용
- ✅ `http://` → `https://` 자동 리다이렉트
- 별도 설정 불필요!

### 확인 방법
- 브라우저 주소창에 **자물쇠 🔒 아이콘** 표시
- 도메인 클릭 시 "연결이 안전합니다" 메시지

---

## 🔧 문제 해결

### Q1: "Invalid Configuration" 오류가 나타나요

**원인:** DNS 설정이 잘못되었습니다.

**해결:**
1. 가비아 DNS 설정 다시 확인:
   - A 레코드: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`
2. 오타 확인 (공백, 특수문자)
3. TTL 값이 너무 크면 1시간(3600)으로 변경
4. 설정 저장 확인

### Q2: 24시간이 지나도 연결이 안 돼요

**해결:**
1. **가비아 고객센터 문의**
   - 📞 전화: 1544-4755
   - 💬 1:1 문의: https://customer.gabia.com
   - "DNS 설정이 제대로 적용되는지 확인 요청"

2. **Vercel 도메인 재추가**
   - Vercel에서 도메인 삭제
   - 5분 후 다시 추가

3. **DNS 캐시 삭제**
   - 컴퓨터 재시작
   - 다른 브라우저 또는 시크릿 모드에서 시도

### Q3: www 없이는 되는데 www는 안 돼요

**해결:**
1. CNAME 레코드 확인
   - 호스트: `www`
   - 값: `cname.vercel-dns.com`
2. Vercel에서 `www.wellness-coaching.co.kr`도 추가했는지 확인

### Q4: "ERR_NAME_NOT_RESOLVED" 오류

**원인:** DNS가 아직 전파되지 않았습니다.

**해결:**
- 1-2시간 더 기다리기
- DNS 전파 확인: https://www.whatsmydns.net

---

## 🎯 체크리스트

### Vercel 설정
- [ ] https://vercel.com/binieni0611-makers-projects/cle 접속
- [ ] Settings > Domains 페이지로 이동
- [ ] `wellness-coaching.co.kr` 추가
- [ ] `www.wellness-coaching.co.kr` 추가
- [ ] DNS 설정값 메모 (A: 76.76.21.21, CNAME: cname.vercel-dns.com)

### 가비아 설정
- [ ] https://www.gabia.com 로그인
- [ ] My가비아 > 도메인 관리
- [ ] DNS 관리 페이지 접속
- [ ] A 레코드 추가: `@` → `76.76.21.21`
- [ ] CNAME 레코드 추가: `www` → `cname.vercel-dns.com`
- [ ] 설정 저장 확인

### 확인
- [ ] DNS 전파 대기 (1-24시간)
- [ ] Vercel에서 도메인 상태 "Valid" 확인
- [ ] https://wellness-coaching.co.kr 접속 테스트
- [ ] https://www.wellness-coaching.co.kr 접속 테스트
- [ ] HTTPS (자물쇠) 적용 확인
- [ ] 모바일 접속 테스트

---

## 📱 연결 완료 후 할 일

### 1. 명함 제작
```
웰니스코칭연구소
https://wellness-coaching.co.kr
📧 binieni@hanmail.net
📱 010-8643-3155
```

### 2. 카카오톡 프로필
- 웹사이트 URL 추가
- 링크 공유 시 미리보기 확인

### 3. 소개 자료
- 브로슈어에 도메인 추가
- 이메일 서명에 링크 추가

### 4. SNS 공유
- 네이버 블로그
- 페이스북
- 인스타그램

---

## 📞 도움이 필요하면

### 가비아 고객센터
- 📞 전화: **1544-4755**
- ⏰ 평일 09:00-18:00
- 💬 1:1 문의: https://customer.gabia.com
- 이렇게 말씀하세요: "Vercel 연결을 위한 DNS 설정을 도와주세요"

### Vercel 지원
- 📧 이메일: support@vercel.com
- 📚 문서: https://vercel.com/docs/concepts/projects/domains

---

## 🎉 완료 메시지

DNS 설정이 완료되고 1-2시간 후:

**축하합니다!** 🎊

웰니스코칭연구소 공식 홈페이지가 
**https://wellness-coaching.co.kr** 로 
운영됩니다!

---

## 📝 중요 정보 요약

| 항목 | 값 |
|------|-----|
| **도메인** | wellness-coaching.co.kr |
| **www 도메인** | www.wellness-coaching.co.kr |
| **A 레코드** | @ → 76.76.21.21 |
| **CNAME 레코드** | www → cname.vercel-dns.com |
| **SSL** | 자동 적용 (무료) |
| **예상 완료** | 1-2시간 |

---

**DNS 설정을 완료하시면 알려주세요!** 
연결 상태를 함께 확인하겠습니다! 🚀
