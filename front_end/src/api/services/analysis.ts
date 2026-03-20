import type { AnalysisResult } from "@/types";
import { BASE_URL, ENDPOINTS } from "@/api/endpoints";
//import { mockAnalysisResult } from "@/data/mock";

export const extractKeywords = async (
  text: string,
): Promise<AnalysisResult> => {
  // Mock 모드일 경우 Mock 데이터 반환
  // if (USE_MOCK) {
  //   console.log("[Mock Mode] extractKeywords 호출됨");
  //   // 실제 API 호출을 시뮬레이션하기 위한 딜레이
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   return mockAnalysisResult;
  // }

  const response = await fetch(`${BASE_URL}${ENDPOINTS.EXTRACT_KEYWORDS}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      text: text,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
};

export const getAnalysisResult = async (
  analysisId: string,
): Promise<AnalysisResult> => {
  // Mock 모드일 경우 Mock 데이터 반환
  // if (USE_MOCK) {
  //   console.log("[Mock Mode] getAnalysisResult 호출됨:", analysisId);
  //   await new Promise((resolve) => setTimeout(resolve, 300));
  //   return mockAnalysisResult;
  // }

  const response = await fetch(
    `${BASE_URL}${ENDPOINTS.ANALYSIS_RESULT(analysisId)}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
