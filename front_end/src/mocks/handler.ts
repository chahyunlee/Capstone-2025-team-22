import { http, HttpResponse } from "msw";
import { BASE_URL, ENDPOINTS } from "@/api/endpoints";
import { mockRecentResults } from "@/data/recentResults.mock";
import { mockAnalysisResult } from "@/data/mock";

export const handlers = [
  http.get(`${BASE_URL}${ENDPOINTS.RECENT_RESULTS}`, () => {
    return HttpResponse.json({ results: mockRecentResults });
  }),

  http.post(`${BASE_URL}${ENDPOINTS.EXTRACT_KEYWORDS}`, () => {
    return HttpResponse.json(mockAnalysisResult);
  }),

  http.get(`${BASE_URL}/analysis_results/:id`, ({ params }) => {
    const id = params.id;
    if (id === "1") return HttpResponse.json(mockAnalysisResult);
    return HttpResponse.json(mockAnalysisResult);
  }),
];
