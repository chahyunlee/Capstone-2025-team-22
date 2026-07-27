## 🧠 KoKeyBERT 기반 인터렉티브 데이터 시각화

부산대학교 정보컴퓨터공학부 2025 전기 졸업과제 **KoKeyBERT(한국어 키워드 분석 모델) 기반 인터렉티브 데이터 시각화 프로젝트**의 프론트엔드 소개입니다.

<p align="center">
  <img src="docs/04.%20서비스화면/kokeybert_main.png" width="700">
</p>

## 프로젝트 소개

**KoKeyBERT**는 공공데이터를 활용해 학습한 한국어 키워드 추출 모델과, 그 결과를 시각화하는 웹 대시보드를 제공하는 프로젝트입니다. 사용자는 한국어 텍스트를 입력하면 핵심 키워드를 확인할 수 있고, 해당 키워드가 **왜 추출되었는지**까지 함께 살펴볼 수 있습니다.

프론트엔드는 NLP 모델의 분석 결과를 받아, **키워드 · 품사 분포 · 추출 근거를 한 화면에서 탐색할 수 있도록 구성**했습니다.

## 배경: NLP와 설명 가능한 AI (XAI)

키워드 추출은 긴 문서에서 핵심 정보를 골라내는 **자연어 처리(NLP)** 기술입니다.  
다만 모델이 키워드만 반환하면 사용자는 "왜 이 단어가 중요한가?"를 알기 어렵습니다.

이를 보완하기 위해 본 서비스는 **설명 가능한 AI(XAI)** 관점을 프론트에 반영했습니다.

- 모델의 **어텐션 점수(attention score)** 정보를 활용해, 특정 키워드 추출에 기여한 원문 구간을 하이라이트로 표시합니다.
- 기여도는 색상 투명도로 표현하고, 품사(명사/동사)에 따라 색을 구분해 해석을 돕습니다.
- 동시에 **워드클라우드**로 문서 전체의 품사별 단어 분포를 보여, 거시적 요약과 미시적 근거를 함께 제공합니다.

프론트엔드는 모델에 의해 추출된 데이터 정보를 **"무엇(키워드) → 왜(어텐션 근거) → 전체 맥락(품사 시각화)"** 순으로 탐색하게 만드는 역할을 수행합니다.

## 시스템 설계

<p align="center">
  <img src="docs/04.%20서비스화면/kokeybert_diagram.png" width="900">
</p>

> [!IMPORTANT]
> **①** 사용자가 분석을 요청하면 React가 FastAPI로 요청을 전달합니다.  
> **②** FastAPI는 KoKeyBERT 모델에 분석을 요청합니다.  
> **③** 모델은 키워드 및 중요도를 추출합니다.  
> **④** 분석 결과는 PostgreSQL에 캐싱됩니다.  
> **⑤** FastAPI가 결과를 반환합니다.  
> **⑥** React가 분석 결과를 시각화하여 사용자에게 제공합니다.

## 기술 스택

| 구분 | 기술 |
|------|------|
| Framework | React 18, TypeScript |
| Bundler | Vite |
| Routing | React Router v7 |
| Styling | SCSS Modules |
| Visualization | react-d3-cloud (D3.js) |
| Icons | react-icons |

## 주요 기능

- **텍스트 분석 요청**: 홈/상세 페이지에서 한국어 텍스트를 입력해 키워드 추출 API 호출
- **키워드 분석 (XAI)**: 키워드 선택 시 어텐션 점수 기반으로 원문 구간을 색상 농도로 하이라이트
- **품사별 워드클라우드**: 명사 / 동사 / 형용사 워드클라우드로 문서 구성 단어 시각화
- **최근 분석 기록**: Drawer에서 최근 분석 결과 목록 확인 및 상세 이동

## 페이지 구성

### 키워드 분석

<p align="center">
  <img src="docs/04.%20서비스화면/kokeybert_functions.png" width="800">
</p>

> [!NOTE]
> **키워드 분석 결과**에서는 추출된 키워드를 품사별로 확인할 수 있으며, 키워드를 선택하면 해당 키워드가 문서에서 추출된 근거를 본문에서 하이라이트하여 확인할 수 있습니다. 또한 품사별 점수를 통해 키워드의 중요도를 직관적으로 파악할 수 있습니다.

<br />

### 키워드 상호작용

<p align="center">
  <img src="docs/04.%20서비스화면/kokeybert_motion.png" width="800">
</p>

> [!NOTE]
> 사용자는 **키워드를 클릭하여 본문과 연동된 분석 결과를 확인**할 수 있습니다. 선택한 키워드는 문서 내에서 하이라이트되어 등장 위치와 문맥을 직관적으로 파악할 수 있으며, 이를 통해 **키워드가 추출된 이유를 쉽게 이해**할 수 있습니다.

<br />

### Attention Score

<p align="center">
  <img src="docs/04.%20서비스화면/kokeybert_attention_score.png" width="800">
</p>

> [!NOTE]
> Attention Score를 통해 **각 키워드가 추출에 기여한 정도를 시각적으로 확인**할 수 있습니다. 높은 점수를 가진 단어일수록 모델이 해당 키워드를 중요한 정보로 판단했음을 의미하며, **키워드 선정 근거를 보다 투명하게 제공**합니다.


## 상세 페이지 탐색 흐름

1. 키워드 버튼 선택
2. 원문에서 해당 키워드의 어텐션 기여 구간 하이라이트 표시
3. 하이라이트된 단어 클릭 시 점수·품사 정보를 GradationScale에 반영
4. 하단 워드클라우드로 품사별 단어 분포 확인

## 디렉터리 구조

```text
src/
├── api/                 # API 엔드포인트 및 서비스
│   ├── endpoints.ts
│   └── services/
│       ├── analysis.ts  # 키워드 추출 / 분석 결과 조회
│       └── results.ts   # 최근 분석 기록 조회
├── components/          # 공통 컴포넌트
│   ├── Drawer/
│   ├── FloatingSearch/
│   └── SearchBar/
├── pages/
│   ├── Home/            # 홈 페이지
│   └── Detail/          # 상세 페이지
│       ├── Sections/
│       │   ├── KeywordAnalysisSection/
│       │   └── WordcloudSection/
│       └── components/
│           ├── TextHighligher/
│           └── GradationScale/
├── routes/              # 라우팅 설정
├── types/               # 타입 정의
└── data/                # 목 데이터
```

## 시작하기

### 요구 사항

- Node.js 18+
- 백엔드 API 서버 (`http://localhost:8000`)

### 설치 및 실행

```bash
cd front_end
npm install
npm run dev
```

개발 서버: `http://localhost:5173`

### 빌드

```bash
npm run build
npm run preview
```

## API 연동

`src/api/endpoints.ts`에서 Base URL과 엔드포인트를 관리합니다.

| Method | Endpoint | 설명 |
|--------|----------|------|
| POST | `/extract_keywords` | 텍스트 키워드 추출 |
| GET | `/analysis_results/:id` | 분석 결과 조회 |
| GET | `/recent_results` | 최근 분석 기록 조회 |

### 주요 응답 타입

```ts
interface AnalysisResult {
  text: string;
  nouns: string[];
  verbs: string[];
  adjectives: string[];
  keywords: string[];
  attention_result?: AttentionResult;
}
```

## 시각화 구현 요약

- **워드클라우드**: `react-d3-cloud`로 품사별 단어를 시각화
- **어텐션 하이라이트**: 커스텀 `TextHighlighter`에서 attention score를 opacity로 변환해 표시
  - 명사: 빨강계열 / 동사: 파랑계열
  - `start` / `end` 오프셋 기준으로 원문 구간을 재조립
- **GradationScale**: 선택된 키워드·클릭한 단어의 점수 스케일을 범례로 제공
- **점수 정규화**: 어텐션 스코어 기반 하이라이트 농도를 표현할 때, 품사(명사/동사)별로 가장 큰 점수를 1로 지정하여 정규화
  - 원시 score 분포가 일정하지 않아도, 해당 키워드·품사 안에서는 최댓값이 가장 진하게 보이도록 함
  - `GradationScale` 범례도 동일한 최댓값 기준으로 눈금을 생성해 하이라이트와 스케일을 일치시킴
- **GradationScale**: 선택된 키워드 및 클릭한 단어의 점수 스케일을 범례로 제공
