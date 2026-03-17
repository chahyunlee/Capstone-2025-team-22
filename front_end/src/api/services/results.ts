import type { RecentResult } from "@/types";
import { BASE_URL, ENDPOINTS, USE_MOCK } from "@/api/endpoints";
import { mockRecentResults } from "@/data/recentResults.mock.ts";

export const getRecentResults = async (): Promise<RecentResult[]> => {
  if (USE_MOCK) {
    console.log("mock data 출력");
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockRecentResults;
  }

  const response = await fetch(`${BASE_URL}${ENDPOINTS.RECENT_RESULTS}`);
  if (!response.ok) {
    throw new Error(`에러 ${response.status}`);
  }
  const data = await response.json();
  return data.results || [];
};
