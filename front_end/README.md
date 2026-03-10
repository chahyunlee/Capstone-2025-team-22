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

# Mock 모드 설정 (true: Mock 데이터 사용, false: 실제 API 호출)
VITE_USE_MOCK=true
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

## Mock 모드

백엔드 API 서버 없이도 프론트엔드를 테스트할 수 있는 Mock 모드를 지원합니다.

### Mock 모드 활성화

`.env` 파일에서 `VITE_USE_MOCK=true`로 설정하면 Mock 모드가 활성화됩니다.

```env
VITE_USE_MOCK=true
```

Mock 모드에서는:
- 실제 API 호출 대신 로컬 Mock 데이터를 사용합니다
- API 호출 지연을 시뮬레이션하여 실제와 유사한 UX를 제공합니다
- 콘솔에 `[Mock Mode]` 메시지가 출력됩니다

### Mock 모드 비활성화

실제 백엔드 API를 사용하려면:

```env
VITE_USE_MOCK=false
VITE_API_BASE_URL=http://localhost:8000
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

### Vercel 환경 변수 설정

Vercel 대시보드에서 환경 변수를 설정할 수 있습니다:

1. Vercel 프로젝트 설정으로 이동
2. Environment Variables 섹션 선택
3. 다음 변수들을 추가:
   - `VITE_USE_MOCK`: `true` (Mock 모드 사용) 또는 `false` (실제 API 사용)
   - `VITE_API_BASE_URL`: 실제 API 서버 주소 (Mock 모드가 false일 때)

### 프로덕션 환경에서 실제 API 사용

프로덕션 환경에서 실제 백엔드 API를 사용하려면:

1. Vercel 대시보드에서 환경 변수 설정:
   - `VITE_USE_MOCK`: `false`
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
