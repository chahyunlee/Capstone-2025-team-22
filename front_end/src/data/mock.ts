import type { AnalyzedText, WordCloudDatum, AnalysisResult, RecentResult } from '@/types';

export const mockData: AnalyzedText = {
  saveAt: "2025-08-05",
  input:
    "인터넷주소관리기관은 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제52조를 근거로 하여 설립된 기관으로, 우리나라 인터넷주소 체계의 안정적 운영과 효율적 관리를 위해 중요한 역할을 맡고 있다. 대표적으로 한국인터넷진흥원이 이에 해당하며, 인터넷주소의 등록, 할당, 유지 관리와 같은 실무를 직접 수행한다. 또한 인터넷주소운영사무소로부터 업무를 위탁받아 운영하는 법인이나 단체도 인터넷주소관리기관의 범주에 포함된다. 이 기관은 단순히 주소를 관리하는 차원을 넘어, 인터넷 이용자들의 권익 보호와 인터넷 환경의 투명성 확보에도 기여한다. 주소 분배 과정에서 공정성과 효율성을 확보하고, 국제 인터넷주소 관리 기구와의 협력에도 참여하여 글로벌 표준과 정책 변화에 적극 대응한다. 이를 통해 국내 인터넷 생태계가 국제적 흐름에 부합하도록 조정하는 역할을 한다. 또한 인터넷주소관리기관은 사이버 보안 측면에서도 매우 중요한 기능을 수행한다. 안정적인 주소 체계는 안전한 인터넷 환경의 기초가 되며, 이를 통해 기업과 개인이 안심하고 인터넷을 활용할 수 있는 기반을 마련한다. 아울러 정책 개발, 제도 개선, 기술 지원 등 다양한 활동을 통해 국가 차원의 정보통신 인프라 발전을 이끌고 있다. 결국 인터넷주소관리기관은 단순한 행정적 주체가 아니라, 인터넷 생태계의 지속 가능한 성장과 국민의 안전한 디지털 생활을 보장하는 핵심 기관으로서, 국가 정보통신 발전 전략의 중추적 역할을 수행한다고 할 수 있다.",
  noun: [
    "인터넷",
    "주소",
    "관리",
    "기관",
    "한국",
    "진흥원",
    "할당",
    "등록",
    "업무",
    "수행",
    "정보",
    "통신",
    "망",
    "이용",
    "촉진",
    "보호",
    "법률",
    "제52조",
    "운영",
    "사무소",
    "법인",
    "단체",
  ],
  verb: ["수행", "말한다", "받"],
  adverb: [],
  key_word: ["인터넷주소", "정보보호", "디지털"],
};

// ✅ API Mock 데이터
export const mockAnalysisResult: AnalysisResult = {
  text: "인터넷주소관리기관은 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제52조를 근거로 하여 설립된 기관으로, 우리나라 인터넷주소 체계의 안정적 운영과 효율적 관리를 위해 중요한 역할을 맡고 있다.",
  nouns: ["인터넷", "주소", "관리", "기관", "한국", "진흥원", "할당", "등록", "업무", "수행", "정보", "통신", "망", "이용", "촉진", "보호", "법률", "제52조", "운영", "사무소"],
  verbs: ["수행", "말한다", "받"],
  adjectives: ["안정적", "효율적", "중요한"],
  keywords: ["인터넷주소", "정보보호", "디지털"],
  noun_count: 20,
  verb_count: 3,
  adjective_count: 3,
  attention_result: {
    "준공승인": {
      nouns: {
        "행동_341_343": { keyword: "행동", score: 0.8911607265472412, start: 341, end: 343 },
        "미비_286_288": { keyword: "미비", score: 1.1392326354980469, start: 286, end: 288 },
        "사항_283_285": { keyword: "사항", score: 0.7490525841712952, start: 283, end: 285 },
      },
      verbs: {
        "이루어진다는_299_305": { keyword: "이루어진다는", score: 0.5714138150215149, start: 299, end: 305 },
        "되나요_83_86": { keyword: "되나요", score: 0.33938765525817877, start: 83, end: 86 },
      }
    }
  }
};

export const mockRecentResults: RecentResult[] = [
  {
    id: 1,
    text: "인터넷주소관리기관은 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제52조를 근거로 하여 설립된 기관입니다.",
    created_at: "2025-08-05T10:30:00Z",
    nouns: ["인터넷", "주소", "관리", "기관", "정보통신망", "이용촉진", "정보보호", "법률"],
    verbs: ["설립"],
    adjectives: [],
    keywords: ["인터넷주소", "정보보호", "법률"],
  },
  {
    id: 2,
    text: "인공지능 기술의 발전은 현대 사회에 큰 영향을 미치고 있습니다.",
    created_at: "2025-08-04T15:20:00Z",
    nouns: ["인공지능", "기술", "발전", "현대", "사회", "영향"],
    verbs: ["미치다"],
    adjectives: ["큰"],
    keywords: ["인공지능", "기술", "발전"],
  },
  {
    id: 3,
    text: "친환경 에너지는 지속 가능한 미래를 위한 핵심 요소입니다.",
    created_at: "2025-08-03T09:15:00Z",
    nouns: ["친환경", "에너지", "미래", "요소"],
    verbs: [],
    adjectives: ["지속가능한", "핵심"],
    keywords: ["친환경", "에너지", "지속가능"],
  },
];

export const mockDataNoKeywords: AnalyzedText = {
  saveAt: "2025-08-04",
  input: "안녕하세요. 오늘 날씨가 좋네요.",
  noun: [],
  verb: [],
  adverb: [],
  key_word: [],
};

export const mockDataAnalysis = {
  준공승인: {
    nouns: {
      행동_341_343: { keyword: "행동", score: 0.8911607265472412, start: 341, end: 343 },
      미비_286_288: { keyword: "미비", score: 1.1392326354980469, start: 286, end: 288 },
      사항_283_285: { keyword: "사항", score: 0.7490525841712952, start: 283, end: 285 },
      예정자_326_329: { keyword: "예정자", score: 1.0591341257095337, start: 326, end: 329 },
      일괄_48_50: { keyword: "일괄", score: 0.7451565256555518, start: 48, end: 50 },
      제기_334_336: { keyword: "제기", score: 0.7274777293205261, start: 334, end: 336 },
      조건부_306_309: { keyword: "조건부", score: 0.9270519614219666, start: 306, end: 309 },
      접수_61_63: { keyword: "접수", score: 0.7340967655181885, start: 61, end: 63 },
      행동_341_343_2: { keyword: "행동", score: 0.8911607265472412, start: 341, end: 343 }
    },
    verbs: {
      이루어진다는_299_305: { keyword: "이루어진다는", score: 0.5714138150215149, start: 299, end: 305 },
      되나요_83_86: { keyword: "되나요", score: 0.33938765525817877, start: 83, end: 86 },
      이루어진다는_299_305_2: { keyword: "이루어진다는", score: 0.5714138150215149, start: 299, end: 305 },
      있나요_184_187: { keyword: "있나요", score: 0.23979261517524772, start: 184, end: 187 },
      하셔도먼서_55_60: { keyword: "하셔도먼서", score: 0.27612936496734627, start: 55, end: 60 }
    }
  }
};

// ✅ react-d3-cloud용 변환 유틸
const randomValue = () => Math.floor(Math.random() * 30) + 10;

export const nounWords: WordCloudDatum[] = mockData.noun.map((word) => ({
  text: word,
  value: randomValue(),
}));

export const verbWords: WordCloudDatum[] = mockData.verb.map((word) => ({
  text: word,
  value: randomValue(),
}));

export const adverbWords: WordCloudDatum[] = mockData.adverb.map((word) => ({
  text: word,
  value: randomValue(),
}));
