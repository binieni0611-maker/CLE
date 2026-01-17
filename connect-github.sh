#!/bin/bash

# GitHub 원격 저장소 연결 스크립트
# 웰니스코칭연구소 홈페이지

echo "🔗 GitHub 원격 저장소 연결 도구"
echo "=================================="
echo ""

# 현재 원격 저장소 확인
echo "📍 현재 연결된 원격 저장소:"
git remote -v
echo ""

# 사용자에게 GitHub 사용자명 입력 받기
echo "❓ GitHub 사용자명을 입력하세요:"
echo "   예시: binieni0611"
read -p "   입력: " USERNAME

if [ -z "$USERNAME" ]; then
    echo "❌ 사용자명이 입력되지 않았습니다."
    exit 1
fi

# 저장소 이름
REPO_NAME="wellness-coaching-institute"

# 새 저장소 URL
NEW_URL="https://github.com/${USERNAME}/${REPO_NAME}.git"

echo ""
echo "🔄 다음 저장소로 연결됩니다:"
echo "   $NEW_URL"
echo ""
read -p "계속하시겠습니까? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
    echo "❌ 취소되었습니다."
    exit 0
fi

echo ""
echo "🔧 원격 저장소 변경 중..."

# 기존 origin 제거
git remote remove origin 2>/dev/null

# 새 origin 추가
git remote add origin "$NEW_URL"

if [ $? -eq 0 ]; then
    echo "✅ 원격 저장소가 성공적으로 연결되었습니다!"
    echo ""
    echo "📍 연결된 저장소:"
    git remote -v
    echo ""
    echo "다음 단계:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1️⃣  GitHub에 저장소가 없다면 먼저 만드세요:"
    echo "   → https://github.com/new"
    echo "   → Repository name: $REPO_NAME"
    echo "   → Public 선택"
    echo "   → Create repository 클릭"
    echo ""
    echo "2️⃣  코드를 GitHub에 업로드하세요:"
    echo "   → git push -u origin main"
    echo ""
    echo "3️⃣  Personal Access Token이 필요합니다:"
    echo "   → https://github.com/settings/tokens"
    echo "   → Generate new token (classic)"
    echo "   → repo 권한 체크"
    echo "   → 생성된 토큰을 비밀번호로 사용"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "자세한 내용은 GITHUB_CONNECTION_GUIDE.md를 참고하세요!"
else
    echo "❌ 원격 저장소 연결에 실패했습니다."
    exit 1
fi
