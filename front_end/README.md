# 키워드 추출 분석 시각화 프론트엔드

React + TypeScript + Vite 기반의 키워드 분석 시각화를 위한 웹 어플리케이션입니다.

## 주요 기능

- 텍스트 키워드 추출 및 분석 후 시각화
- 워드클라우드 시각화
- Attention Score 기반 키워드 하이라이팅

## 시작하기

### 설치

```bash
npm install
```

### 환경 변수 설정

`.env.example` 파일을 복사하여 `.env` 파일을 생성합니다:

```bash
cp .env.example .env
```

환경 변수 설정:

```env
# API 설정
VITE_API_BASE_URL=http://localhost:8000
```

### 개발 모드 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
```

## Vercel 배포

### 자동 배포

1. GitHub 저장소를 Vercel에 연결
2. Vercel이 자동으로 `vercel.json` 설정을 인식하여 배포
3. 프로덕션 환경에서는 자동으로 Mock 모드가 활성화됩니다

### 수동 배포

Vercel CLI를 사용한 배포:

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel
```

### 프로덕션 환경에서 실제 API 사용

프로덕션 환경에서 실제 백엔드 API를 사용하려면:

1. Vercel 대시보드에서 환경 변수 설정:
   - `VITE_API_BASE_URL`: `https://your-api-domain.com`

2. 재배포 트리거

## 프로젝트 구조

```
src/
├── api/              # API 서비스 레이어
│   ├── endpoints.ts  # API 엔드포인트 정의
│   └── services/     # API 호출 함수들
├── components/       # 재사용 가능한 컴포넌트
├── data/            # Mock 데이터
├── pages/           # 페이지 컴포넌트
├── routes/          # 라우팅 설정
├── types/           # TypeScript 타입 정의
└── utils/           # 유틸리티 함수
```

## 기술 스택

- **React 18**: UI 라이브러리
- **TypeScript**: 타입 안정성
- **Vite**: 빌드 도구
- **React Router**: 라우팅
- **SCSS Modules**: 스타일링
- **D3 & react-d3-cloud**: 워드클라우드 시각화

## 개발 가이드

### 코드 스타일

ESLint를 사용하여 코드 스타일을 관리합니다:

```bash
npm run lint
```

### 컴포넌트 작성

- 함수형 컴포넌트와 Hooks 사용
- TypeScript를 활용한 타입 안정성 확보
- SCSS Modules를 사용한 스타일 캡슐화

## 라이센스

MIT
