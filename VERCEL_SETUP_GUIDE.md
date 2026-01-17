# 🚀 Vercel 배포 설정 가이드

## 문제 상황
이미지가 로드되지 않는 이유: **Root Directory 설정이 잘못되었습니다!**

## ✅ 해결 방법

### STEP 1: Vercel 프로젝트 설정으로 이동

1. https://vercel.com/binieni0611-makers-projects/cle 접속
2. **Settings** 탭 클릭

### STEP 2: Root Directory 변경

1. 왼쪽 메뉴에서 **General** 클릭
2. **Root Directory** 섹션 찾기
3. **Edit** 버튼 클릭
4. 입력란에 `wellness-coaching-institute` 입력
5. **Save** 클릭

### STEP 3: 재배포

1. 상단 **Deployments** 탭 클릭
2. 최근 배포 옆 **...** (점 3개) 클릭
3. **Redeploy** 클릭
4. **Redeploy** 버튼 다시 클릭하여 확인

### STEP 4: 배포 완료 확인

- 약 2-3분 후 배포 완료
- **Visit** 버튼 클릭하여 사이트 확인
- 이미지가 정상적으로 표시되는지 확인

---

## 📋 올바른 Vercel 설정

| 설정 항목 | 값 |
|----------|-----|
| **Root Directory** | `wellness-coaching-institute` |
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

---

## 🎯 확인 체크리스트

- [ ] Root Directory를 `wellness-coaching-institute`로 변경
- [ ] 설정 저장 완료
- [ ] 재배포 실행
- [ ] 배포 성공 확인 (Success 표시)
- [ ] 사이트 접속하여 이미지 확인
- [ ] 모바일 반응형 확인

---

## 💡 추가 팁

### 배포 URL
배포 완료 후 자동으로 생성되는 URL:
- `https://cle.vercel.app` 또는
- `https://cle-binieni0611-maker.vercel.app`

### 도메인 연결
배포 완료 후 **Settings > Domains**에서 사용자 도메인 연결 가능

---

**문제가 해결되면 알려주세요!** 🎉
