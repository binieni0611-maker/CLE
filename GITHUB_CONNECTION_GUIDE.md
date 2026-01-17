# 🔗 GitHub 원격 저장소 연결 가이드

## 📌 목차
1. [GitHub 저장소 만들기](#step-1-github-저장소-만들기)
2. [원격 저장소 연결하기](#step-2-원격-저장소-연결하기)
3. [코드 업로드하기](#step-3-코드-업로드하기)
4. [문제 해결](#-문제-해결)

---

## STEP 1: GitHub 저장소 만들기

### 1-1. GitHub 웹사이트 접속

1. 브라우저에서 **https://github.com** 접속
2. 로그인 (계정이 없다면 Sign up으로 가입)

### 1-2. 새 저장소(Repository) 생성

1. 우측 상단 **"+"** 버튼 클릭
2. **"New repository"** 선택
3. 저장소 정보 입력:

```
Repository name: wellness-coaching-institute
Description: 웰니스코칭연구소 공식 홈페이지
Public/Private: Public 선택 (무료!)
```

**중요! 다음 옵션들은 체크하지 마세요:**
- ❌ Add a README file (체크 해제)
- ❌ Add .gitignore (체크 해제)
- ❌ Choose a license (None 선택)

4. **"Create repository"** 버튼 클릭

### 1-3. 저장소 URL 복사

생성 완료 후 나타나는 화면에서 저장소 URL을 확인:

```
https://github.com/YOUR_USERNAME/wellness-coaching-institute.git
```

**예시:**
```
https://github.com/binieni0611/wellness-coaching-institute.git
```

이 URL을 메모장에 복사해두세요! 📝

---

## STEP 2: 원격 저장소 연결하기

### 방법 1: 새로 연결하기 (처음 연결하는 경우)

터미널이나 Git Bash에서 다음 명령어를 실행:

```bash
# 1. 프로젝트 폴더로 이동
cd /path/to/wellness-coaching-institute

# 2. 현재 원격 저장소 확인
git remote -v

# 3. 원격 저장소가 없다면 추가 (YOUR_USERNAME을 실제 사용자명으로 변경!)
git remote add origin https://github.com/YOUR_USERNAME/wellness-coaching-institute.git

# 4. 연결 확인
git remote -v
```

### 방법 2: 기존 연결 변경하기 (잘못된 저장소가 연결된 경우)

```bash
# 1. 기존 원격 저장소 제거
git remote remove origin

# 2. 새로운 원격 저장소 추가 (YOUR_USERNAME을 실제 사용자명으로 변경!)
git remote add origin https://github.com/YOUR_USERNAME/wellness-coaching-institute.git

# 3. 연결 확인
git remote -v
```

**출력 예시:**
```
origin  https://github.com/binieni0611/wellness-coaching-institute.git (fetch)
origin  https://github.com/binieni0611/wellness-coaching-institute.git (push)
```

---

## STEP 3: 코드 업로드하기

### 3-1. 현재 브랜치 확인 및 변경

```bash
# 현재 브랜치 확인
git branch

# main 브랜치로 변경 (필요한 경우)
git branch -M main
```

### 3-2. GitHub에 코드 푸시

```bash
# GitHub에 코드 업로드
git push -u origin main
```

### 3-3. 인증 요청 처리

#### 🔐 방법 A: Personal Access Token 사용 (추천!)

GitHub는 2021년 8월부터 비밀번호 대신 Token을 사용합니다.

**Token 생성 방법:**

1. GitHub 웹사이트 로그인
2. 우측 상단 프로필 사진 클릭 → **Settings**
3. 좌측 하단 **Developer settings** 클릭
4. **Personal access tokens** → **Tokens (classic)** 클릭
5. **Generate new token** → **Generate new token (classic)** 선택
6. Token 설정:
   ```
   Note: wellness-website-deployment
   Expiration: 90 days (또는 원하는 기간)
   Select scopes: ✓ repo (전체 체크)
   ```
7. **Generate token** 버튼 클릭
8. 🔴 **중요!** 생성된 토큰을 복사하여 안전한 곳에 저장
   (다시 볼 수 없습니다!)

**Token 사용:**
```bash
git push -u origin main
```

입력 요청 시:
- Username: GitHub 사용자명
- Password: 생성한 Token 붙여넣기

#### 🔐 방법 B: SSH 키 사용

```bash
# 1. SSH 키 생성 (이미 있으면 건너뛰기)
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. SSH 키 복사
cat ~/.ssh/id_ed25519.pub

# 3. GitHub 웹사이트 → Settings → SSH and GPG keys → New SSH key
#    복사한 키를 붙여넣기

# 4. 원격 저장소 URL을 SSH로 변경
git remote set-url origin git@github.com:YOUR_USERNAME/wellness-coaching-institute.git

# 5. 푸시
git push -u origin main
```

---

## ✅ 업로드 성공 확인

### GitHub 웹사이트에서 확인

1. https://github.com/YOUR_USERNAME/wellness-coaching-institute 접속
2. 파일들이 보이면 성공! 🎉

예상되는 파일 목록:
```
✓ README.md
✓ DEPLOYMENT_GUIDE.md
✓ SIMPLE_GUIDE.md
✓ deploy.sh
✓ wellness-coaching-institute/ (폴더)
```

---

## 🔄 이후 코드 업데이트 방법

코드를 수정한 후 GitHub에 다시 업로드하려면:

```bash
# 1. 변경사항 확인
git status

# 2. 변경된 파일 추가
git add .

# 3. 커밋 (변경 내용 설명)
git commit -m "홈페이지 내용 수정"

# 4. GitHub에 푸시
git push origin main
```

---

## 🆘 문제 해결

### ❓ 문제 1: "Permission denied" 오류

**원인:** 인증 실패

**해결 방법:**

```bash
# Personal Access Token 사용
git config --global credential.helper store
git push -u origin main
# Username과 Token 입력
```

또는 SSH 키 사용으로 전환

---

### ❓ 문제 2: "remote origin already exists" 오류

**원인:** 이미 origin이 설정되어 있음

**해결 방법:**

```bash
# 기존 origin 제거
git remote remove origin

# 새로 추가
git remote add origin https://github.com/YOUR_USERNAME/wellness-coaching-institute.git
```

---

### ❓ 문제 3: "failed to push some refs" 오류

**원인:** GitHub 저장소에 로컬에 없는 파일이 있음

**해결 방법:**

```bash
# GitHub의 변경사항을 먼저 가져오기
git pull origin main --allow-unrelated-histories

# 충돌 해결 후 다시 푸시
git push -u origin main
```

---

### ❓ 문제 4: "Repository not found" 오류

**원인:** 
- 저장소 이름이 잘못됨
- 저장소가 Private이고 접근 권한이 없음
- URL이 잘못됨

**해결 방법:**

```bash
# 1. URL 확인
git remote -v

# 2. URL이 잘못되었다면 수정
git remote set-url origin https://github.com/YOUR_USERNAME/wellness-coaching-institute.git

# 3. GitHub 웹사이트에서 저장소 이름 확인
```

---

### ❓ 문제 5: Token이 작동하지 않음

**해결 방법:**

1. Token 권한 확인 (repo 체크되어 있는지)
2. Token 만료 확인
3. 새 Token 생성
4. Credential 캐시 삭제:

```bash
# Windows
git credential-manager delete https://github.com

# Mac/Linux
git config --global --unset credential.helper
```

---

## 📝 현재 상태 체크

현재 프로젝트의 Git 상태를 확인하려면:

```bash
# 원격 저장소 확인
git remote -v

# 브랜치 확인
git branch

# 커밋 히스토리 확인
git log --oneline -5

# 현재 상태 확인
git status
```

---

## 🎯 실제 연결 예시

### 예시 1: binieni0611 계정으로 연결

```bash
# 1. 프로젝트 폴더로 이동
cd /home/user/webapp

# 2. 기존 연결 제거
git remote remove origin

# 3. 새 저장소 연결
git remote add origin https://github.com/binieni0611/wellness-coaching-institute.git

# 4. 브랜치 확인
git branch -M main

# 5. 푸시
git push -u origin main
```

입력 요청 시:
- Username: `binieni0611`
- Password: (Personal Access Token 붙여넣기)

---

## 🔒 Token 저장하기 (선택사항)

매번 Token을 입력하지 않으려면:

### Windows:
```bash
git config --global credential.helper wincred
```

### Mac:
```bash
git config --global credential.helper osxkeychain
```

### Linux:
```bash
git config --global credential.helper store
```

---

## ✅ 연결 완료 체크리스트

- [ ] GitHub 저장소 생성 완료
- [ ] 저장소 URL 확인 및 복사
- [ ] `git remote add origin` 실행
- [ ] `git remote -v`로 연결 확인
- [ ] Personal Access Token 생성 (또는 SSH 키 설정)
- [ ] `git push -u origin main` 성공
- [ ] GitHub 웹사이트에서 파일 확인

---

## 📞 추가 도움

- GitHub 공식 문서: https://docs.github.com
- Git 기본 가이드: https://git-scm.com/book/ko/v2
- Personal Access Token 가이드: https://docs.github.com/en/authentication

---

**🎉 연결 완료되면 다음 단계는 Vercel 배포입니다!**

`SIMPLE_GUIDE.md` 파일의 "STEP 2: Vercel로 배포하기"를 참고하세요.
