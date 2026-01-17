# 🎯 웰니스코칭연구소 홈페이지 실행 가이드 (초보자용)

## 📌 목차
1. [가장 쉬운 방법: Vercel 사용](#-방법-1-vercel-사용-가장-쉬움)
2. [GitHub Pages 사용](#-방법-2-github-pages)
3. [Netlify 드래그앤드롭](#-방법-3-netlify-드래그앤드롭)

---

## 🌟 방법 1: Vercel 사용 (가장 쉬움!)

### 소요 시간: 약 10분
### 비용: 무료
### 난이도: ⭐ (매우 쉬움)

### 📝 준비물
- 이메일 주소 (Gmail 등)
- GitHub 계정 (없으면 5분 안에 만들 수 있어요!)

---

### 🔹 STEP 1: GitHub 계정 만들기 (이미 있으면 건너뛰기)

1. **https://github.com** 접속
2. 우측 상단 **"Sign up"** 클릭
3. 이메일 주소 입력
4. 비밀번호 설정
5. 사용자 이름 입력 (예: `binieni0611`)
6. 이메일 인증 완료
7. ✅ 계정 생성 완료!

---

### 🔹 STEP 2: GitHub에 저장소 만들기

1. GitHub 로그인 후, 우측 상단 **"+"** 버튼 클릭
2. **"New repository"** 선택
3. 저장소 정보 입력:
   ```
   Repository name: wellness-coaching-institute
   Description: 웰니스코칭연구소 공식 홈페이지
   ✓ Public 선택 (무료!)
   ✓ "Add a README file" 체크 해제
   ```
4. **"Create repository"** 버튼 클릭
5. ✅ 저장소 생성 완료!

---

### 🔹 STEP 3: 코드 업로드하기

#### 3-1. Git이 설치되어 있지 않다면?

**Windows:**
- https://git-scm.com/download/win 에서 다운로드
- 설치 후 "Git Bash" 실행

**Mac:**
```bash
# 터미널에서 실행
xcode-select --install
```

#### 3-2. 프로젝트 폴더로 이동

```bash
# 프로젝트가 있는 폴더로 이동 (경로는 실제 위치로 변경)
cd /path/to/wellness-coaching-institute

# 예시 (Windows):
# cd C:\Users\사용자명\Downloads\wellness-coaching-institute

# 예시 (Mac):
# cd ~/Downloads/wellness-coaching-institute
```

#### 3-3. GitHub에 업로드

```bash
# Git 초기화 (이미 되어 있으면 생략)
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "첫 번째 커밋: 웰니스코칭연구소 홈페이지"

# main 브랜치로 변경
git branch -M main

# GitHub 저장소 연결 (YOUR_USERNAME을 실제 사용자명으로 변경!)
git remote add origin https://github.com/YOUR_USERNAME/wellness-coaching-institute.git

# GitHub에 업로드
git push -u origin main
```

**💡 예시:**
```bash
# GitHub 사용자명이 "binieni0611"인 경우:
git remote add origin https://github.com/binieni0611/wellness-coaching-institute.git
```

**🔐 인증 요청 시:**
- Username: GitHub 사용자명
- Password: GitHub 비밀번호 또는 Personal Access Token

**Personal Access Token 만들기:**
1. GitHub → 우측 상단 프로필 클릭 → Settings
2. 좌측 하단 **Developer settings**
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token** → **Generate new token (classic)**
5. Note에 "wellness-website" 입력
6. **repo** 체크박스 선택
7. **Generate token** 클릭
8. 생성된 토큰 복사 (다시 볼 수 없으니 잘 보관!)
9. Git push 시 비밀번호 대신 이 토큰 입력

---

### 🔹 STEP 4: Vercel로 배포하기

#### 4-1. Vercel 계정 만들기

1. **https://vercel.com** 접속
2. **"Sign Up"** 클릭
3. **"Continue with GitHub"** 선택
4. GitHub 계정으로 로그인
5. Vercel에 GitHub 접근 권한 허용
6. ✅ Vercel 계정 생성 완료!

#### 4-2. 프로젝트 배포하기

1. Vercel 대시보드에서 **"Add New..."** 클릭
2. **"Project"** 선택
3. GitHub 저장소 목록에서 **"wellness-coaching-institute"** 찾기
4. 저장소 옆 **"Import"** 버튼 클릭
5. 프로젝트 설정 화면에서:
   ```
   ✓ Project Name: wellness-coaching-institute (그대로 두기)
   ✓ Framework Preset: Vite (자동 감지됨)
   ✓ Root Directory: wellness-coaching-institute (선택)
   ✓ Build Command: npm run build (자동)
   ✓ Output Directory: dist (자동)
   ```
6. **"Deploy"** 버튼 클릭!
7. ⏱️ 2-3분 대기...
8. 🎉 **배포 완료!**

#### 4-3. 홈페이지 확인하기

배포가 완료되면 Vercel이 자동으로 생성한 URL이 표시됩니다:

**예시 URL:**
```
https://wellness-coaching-institute.vercel.app
```

또는
```
https://wellness-coaching-institute-abc123.vercel.app
```

이 URL을 복사하여 브라우저에서 열어보세요!

✅ **완료!** 이제 전 세계 어디서나 접속 가능한 홈페이지가 생성되었습니다!

---

### 🔄 홈페이지 내용 수정하기

홈페이지 내용을 수정하고 싶을 때:

1. 코드 파일 수정
2. 터미널에서 다음 명령어 실행:

```bash
git add .
git commit -m "홈페이지 내용 수정"
git push origin main
```

3. Vercel이 자동으로 감지하여 새로 배포합니다! (약 2분 소요)
4. 완료!

---

## 🌐 방법 2: GitHub Pages

### 소요 시간: 약 15분
### 비용: 무료
### 난이도: ⭐⭐ (보통)

### 🔹 STEP 1: package.json 수정

`wellness-coaching-institute/package.json` 파일을 열어서 `scripts` 부분에 추가:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"  // ← 이 줄 추가!
  }
}
```

### 🔹 STEP 2: vite.config.js 수정

`wellness-coaching-institute/vite.config.js` 파일 수정:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/wellness-coaching-institute/',  // ← 저장소 이름 추가
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    cors: true,
  },
})
```

### 🔹 STEP 3: 배포하기

터미널에서:

```bash
# gh-pages 패키지 설치
npm install -D gh-pages

# 빌드
npm run build

# 배포
npm run deploy
```

### 🔹 STEP 4: GitHub Pages 활성화

1. GitHub 저장소 페이지 접속
2. **"Settings"** 탭 클릭
3. 좌측 메뉴에서 **"Pages"** 선택
4. Source에서 **"Deploy from a branch"** 선택
5. Branch: **"gh-pages"** 선택, 폴더: **"/ (root)"** 선택
6. **"Save"** 클릭
7. ⏱️ 1-2분 대기

✅ **완료!** 다음 URL에서 접속 가능:
```
https://YOUR_USERNAME.github.io/wellness-coaching-institute/
```

---

## 📱 방법 3: Netlify (드래그앤드롭)

### 소요 시간: 약 5분
### 비용: 무료
### 난이도: ⭐ (매우 쉬움!)

### 🔹 STEP 1: 프로젝트 빌드

터미널에서:

```bash
cd wellness-coaching-institute
npm install
npm run build
```

→ `dist` 폴더가 생성됩니다.

### 🔹 STEP 2: Netlify에 드래그앤드롭

1. **https://app.netlify.com** 접속
2. GitHub 계정으로 로그인
3. 대시보드에서 드래그앤드롭 영역 찾기
4. 생성된 **`dist` 폴더**를 드래그하여 업로드
5. ⏱️ 1분 대기...
6. 🎉 **배포 완료!**

✅ Netlify가 자동으로 생성한 URL 제공:
```
https://wellness-coaching-abc123.netlify.app
```

---

## 🎯 커스텀 도메인 연결하기 (선택사항)

자신만의 도메인 (예: `wellnesscoaching.kr`)을 사용하고 싶다면:

### STEP 1: 도메인 구매
- 카페24 (https://www.cafe24.com)
- 가비아 (https://www.gabia.com)
- Namecheap (https://www.namecheap.com)
- GoDaddy (https://www.godaddy.com)

### STEP 2: Vercel에 도메인 연결

1. Vercel 프로젝트 → **Settings** → **Domains**
2. 구매한 도메인 입력
3. Vercel이 제공하는 DNS 설정 안내 따라하기
4. 도메인 제공업체 사이트에서 DNS 설정 추가

**A 레코드:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME 레코드:**
```
Type: CNAME  
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

⏱️ DNS 설정 반영: 최대 24-48시간

---

## 🆘 문제 해결

### ❓ "Permission denied" 오류가 나요

**해결:**
1. GitHub에서 Personal Access Token 생성
2. 토큰을 비밀번호 대신 입력

### ❓ 빌드가 실패해요

**확인사항:**
1. `npm install`이 정상 완료되었나요?
2. `npm run build`를 로컬에서 테스트했나요?
3. Node.js 버전이 18 이상인가요? (`node -v`로 확인)

### ❓ 이미지가 안 보여요

**해결:**
1. 이미지 파일이 `public` 폴더에 있는지 확인
2. 이미지 경로가 `/logo-purple.jpg` 형태인지 확인 (앞에 `/` 필수)

### ❓ GitHub에 push할 때 오류가 나요

**해결:**
```bash
# 원격 저장소 URL 확인
git remote -v

# URL이 잘못되었다면 다시 설정
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/wellness-coaching-institute.git
```

---

## 📞 추가 도움

- Vercel 공식 문서: https://vercel.com/docs
- GitHub Pages 가이드: https://pages.github.com
- Netlify 문서: https://docs.netlify.com
- YouTube 검색: "Vercel 배포 방법"

---

## ✅ 배포 전 체크리스트

- [ ] 연락처 정보 확인 (binieni@hanmail.net, 010-8643-3155)
- [ ] 이미지 파일이 public 폴더에 있음
- [ ] `npm run build` 테스트 완료
- [ ] Git 커밋 완료
- [ ] GitHub에 push 완료
- [ ] Vercel/GitHub Pages/Netlify 중 하나 선택
- [ ] 배포 완료 및 URL 확인

---

**🎉 축하합니다!**

이제 웰니스코칭연구소 홈페이지가 전 세계에 공개되었습니다!

친구, 가족, 고객들에게 URL을 공유하세요! 📱
