# 숨숨 앱 홈페이지

숨숨(SoomSoom) 앱의 공식 홈페이지입니다. 정적 HTML로 제작되어 빠른 로딩과 SEO 최적화를 제공합니다.

## 🚀 배포된 사이트

- **홈페이지**: https://jisung-louis.github.io/soomsoom-homepage/
- **이용약관**: https://jisung-louis.github.io/soomsoom-homepage/terms-of-service.html
- **개인정보처리방침**: https://jisung-louis.github.io/soomsoom-homepage/privacy-policy.html

## 📁 프로젝트 구조

```
soomsoom-homepage/
├── public/
│   ├── index.html              # 메인 홈페이지
│   ├── terms-of-service.html   # 이용약관
│   ├── privacy-policy.html     # 개인정보처리방침
│   ├── 404.html               # 404 에러 페이지
│   └── _redirects             # 리다이렉트 설정
├── .github/workflows/
│   └── deploy.yml             # GitHub Pages 자동 배포
└── README.md
```

## 🛠️ 로컬 개발

```bash
# Python HTTP 서버로 로컬 실행
npm run dev
# 또는
python3 -m http.server 8000 --directory public
```

브라우저에서 `http://localhost:8000`으로 접속하세요.

## 📝 주요 특징

- ✅ **정적 HTML**: 빠른 로딩과 SEO 최적화
- ✅ **반응형 디자인**: 모바일과 데스크톱 모두 지원
- ✅ **Google OAuth 호환**: 완벽한 URL 구조
- ✅ **자동 배포**: GitHub Actions로 자동 배포
- ✅ **접근성**: 웹 접근성 가이드라인 준수

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript**: 바닐라 JS (최소한의 상호작용)
- **GitHub Pages**: 정적 사이트 호스팅
- **GitHub Actions**: CI/CD 자동화

## 📱 숨숨 앱 다운로드

- **App Store**: [숨숨 앱 다운로드](https://apps.apple.com/kr/app/%EC%88%A8%EC%88%A8/id6752624555)

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 문의

- **이메일**: sumsumhouse25@gmail.com
- **개인정보보호책임자**: 박상훈, 김기성