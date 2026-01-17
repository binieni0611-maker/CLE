# 웰니스코칭연구소 홈페이지 배포 가이드

## 🚀 방법 1: Vercel로 배포 (추천! ⭐⭐⭐⭐⭐)

### 준비물
- GitHub 계정
- 이메일 주소

---

## 📋 단계별 배포 가이드

### STEP 1: GitHub에 코드 업로드

#### 1-1. GitHub 저장소 생성
1. https://github.com 접속하여 로그인
2. 우측 상단 "+" 버튼 클릭 → "New repository" 선택
3. 저장소 정보 입력:
   - Repository name: `wellness-coaching-institute`
   - Description: "웰니스코칭연구소 공식 홈페이지"
   - Public 선택
   - ✅ "Add a README file" 체크 해제
   - "Create repository" 클릭

#### 1-2. 로컬 코드를 GitHub에 업로드

터미널에서 다음 명령어를 실행하세요:

```bash
# 프로젝트 폴더로 이동
cd /path/to/wellness-coaching-institute

# GitHub 저장소 연결 (YOUR_USERNAME을 실제 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/wellness-coaching-institute.git

# main 브랜치로 이름 변경 (이미 main이면 생략 가능)
git branch -M main

# GitHub에 코드 업로드
git push -u origin main
```

**예시:**
```bash
# 예: GitHub 사용자명이 "binieni0611"인 경우
git remote add origin https://github.com/binieni0611/wellness-coaching-institute.git
git branch -M main
git push -u origin main
```

> 💡 **GitHub 인증 방법:**
> - 사용자명: GitHub 사용자명
> - 비밀번호: Personal Access Token (PAT) 사용
> - PAT 생성: GitHub → Settings → Developer settings → Personal access tokens → Generate new token

---

### STEP 2: Vercel로 배포

#### 2-1. Vercel 계정 만들기
1. https://vercel.com 접속
2. "Sign Up" 클릭
3. **"Continue with GitHub"** 선택 (가장 간단!)
4. GitHub 계정으로 로그인
5. Vercel에 GitHub 접근 권한 허용

#### 2-2. 프로젝트 배포
1. Vercel 대시보드에서 **"Add New..."** 클릭
2. **"Project"** 선택
3. **"Import Git Repository"** 섹션에서 GitHub 저장소 찾기
4. `wellness-coaching-institute` 저장소 옆에 **"Import"** 클릭
5. 프로젝트 설정:
   ```
   Project Name: wellness-coaching-institute (기본값 사용)
   Framework Preset: Vite (자동 감지됨)
   Root Directory: ./wellness-coaching-institute
   Build Command: npm run build (자동 설정됨)
   Output Directory: dist (자동 설정됨)
   ```
6. **"Deploy"** 버튼 클릭! 🚀

#### 2-3. 배포 완료! 🎉
- 2-3분 후 배포 완료
- Vercel이 자동으로 생성한 URL 제공 (예: `https://wellness-coaching-institute.vercel.app`)
- 이 URL을 복사하여 사용하세요!

---

### STEP 3: 커스텀 도메인 연결 (선택사항)

자신만의 도메인(예: `wellnesscoaching.kr`)을 사용하고 싶다면:

#### 3-1. 도메인 구매
- 카페24, 가비아, Namecheap, GoDaddy 등에서 도메인 구매

#### 3-2. Vercel에 도메인 연결
1. Vercel 프로젝트 대시보드 → **"Settings"** 탭
2. **"Domains"** 메뉴 클릭
3. 구매한 도메인 입력 (예: `wellnesscoaching.kr`)
4. **"Add"** 클릭
5. Vercel이 제공하는 DNS 설정 안내 따라하기

#### 3-3. 도메인 제공업체에서 DNS 설정
도메인 구매 사이트에 로그인하여 DNS 설정 추가:

**A 레코드 추가:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME 레코드 추가:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

> 💡 DNS 설정 반영은 최대 24-48시간 소요될 수 있습니다.

---

## 🔄 배포 후 업데이트 방법

코드를 수정한 후 다시 배포하려면:

```bash
# 변경사항 커밋
git add .
git commit -m "홈페이지 내용 업데이트"

# GitHub에 푸시
git push origin main
```

**✨ Vercel이 자동으로 감지하여 새로 배포합니다!** (약 2분 소요)

---

## 📱 방법 2: GitHub Pages로 배포 (무료, 간단)

### STEP 1: package.json에 설정 추가

`wellness-coaching-institute/package.json` 파일을 열어서 수정:

```json
{
  "name": "wellness-coaching-institute",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"  // ← 이 줄 추가
  }
}
```

### STEP 2: vite.config.js 수정

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/wellness-coaching-institute/',  // ← GitHub 저장소 이름
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    cors: true,
  },
})
```

### STEP 3: 배포 스크립트 실행

```bash
# gh-pages 패키지 설치
npm install -D gh-pages

# 빌드 및 배포
npm run build
npm run deploy
```

### STEP 4: GitHub Pages 활성화

1. GitHub 저장소 페이지 → **"Settings"** 탭
2. 좌측 메뉴에서 **"Pages"** 선택
3. Source: **"Deploy from a branch"**
4. Branch: **"gh-pages"** 선택, 폴더: **"/ (root)"**
5. **"Save"** 클릭

**완료!** 약 1-2분 후 `https://YOUR_USERNAME.github.io/wellness-coaching-institute/` 에서 접속 가능

---

## 🌟 방법 3: Netlify로 배포 (드래그 앤 드롭)

### 가장 간단한 방법!

#### STEP 1: 프로젝트 빌드
```bash
cd wellness-coaching-institute
npm run build
```
→ `dist` 폴더가 생성됩니다.

#### STEP 2: Netlify에 배포
1. https://www.netlify.com 접속
2. "Sign up" → GitHub 계정으로 로그인
3. 대시보드에서 **드래그 앤 드롭 영역** 찾기
4. 생성된 `dist` 폴더를 드래그하여 업로드
5. 자동으로 배포 시작!

**완료!** Netlify가 자동으로 생성한 URL 제공 (예: `https://wellness-coaching-abc123.netlify.app`)

---

## 🆘 문제 해결 (Troubleshooting)

### Q1: GitHub에 푸시할 때 "Permission denied" 오류
**해결책:**
```bash
# Personal Access Token(PAT) 생성
# GitHub → Settings → Developer settings → Personal access tokens → Generate new token
# repo 권한 체크 → Generate token

# Git 인증 정보 재설정
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/wellness-coaching-institute.git
```

### Q2: Vercel 배포 시 "Build failed" 오류
**해결책:**
- Vercel 설정에서 Root Directory를 `wellness-coaching-institute`로 설정
- Build Command: `npm run build`
- Output Directory: `dist`

### Q3: 이미지가 표시되지 않음
**해결책:**
- 이미지 경로가 `/logo-purple.jpg` 형태인지 확인
- `public` 폴더에 이미지 파일이 있는지 확인

---

## 📞 추가 도움이 필요하시면

- Vercel 문서: https://vercel.com/docs
- GitHub Pages 문서: https://docs.github.com/pages
- Netlify 문서: https://docs.netlify.com

---

## ✅ 배포 체크리스트

배포 전 확인사항:

- [ ] 연락처 정보 업데이트 완료 (binieni@hanmail.net, 010-8643-3155)
- [ ] 모든 이미지 파일이 `public` 폴더에 있음
- [ ] `npm run build` 명령어가 오류 없이 실행됨
- [ ] 로컬에서 `npm run preview`로 테스트 완료
- [ ] Git 커밋 완료
- [ ] GitHub 저장소에 푸시 완료

---

**🎉 축하합니다! 이제 전 세계 어디서나 웰니스코칭연구소 홈페이지에 접속할 수 있습니다!**
