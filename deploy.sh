#!/bin/bash

# 웰니스코칭연구소 홈페이지 빠른 배포 스크립트

echo "🚀 웰니스코칭연구소 홈페이지 배포 시작..."
echo ""

# 1. 프로젝트 폴더로 이동
cd wellness-coaching-institute

# 2. 의존성 설치 확인
if [ ! -d "node_modules" ]; then
    echo "📦 의존성 패키지 설치 중..."
    npm install
fi

# 3. 빌드 실행
echo "🔨 프로젝트 빌드 중..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 빌드 성공!"
    echo ""
    echo "📁 빌드 결과: dist 폴더"
    echo ""
    echo "다음 단계를 선택하세요:"
    echo ""
    echo "1️⃣  Vercel 배포 (추천):"
    echo "   → https://vercel.com 에서 GitHub 저장소 연결"
    echo ""
    echo "2️⃣  Netlify 배포 (드래그 앤 드롭):"
    echo "   → dist 폴더를 https://app.netlify.com/drop 에 드래그"
    echo ""
    echo "3️⃣  GitHub Pages 배포:"
    echo "   → npm install -D gh-pages"
    echo "   → npm run deploy"
    echo ""
    echo "자세한 내용은 DEPLOYMENT_GUIDE.md 파일을 참고하세요."
    echo ""
else
    echo ""
    echo "❌ 빌드 실패!"
    echo "오류를 확인하고 다시 시도해주세요."
    exit 1
fi
