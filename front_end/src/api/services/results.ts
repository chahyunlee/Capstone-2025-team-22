import type { RecentResult } from '@/types';
import { BASE_URL, ENDPOINTS, USE_MOCK } from '@/api/endpoints';
import { mockRecentResults } from '@/data/mock';

export const getRecentResults = async (): Promise<RecentResult[]> => {
  // Mock 모드일 경우 Mock 데이터 반환
  if (USE_MOCK) {
    console.log('[Mock Mode] getRecentResults 호출됨');
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockRecentResults;
  }

  const response = await fetch(`${BASE_URL}${ENDPOINTS.RECENT_RESULTS}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results || [];
}; 