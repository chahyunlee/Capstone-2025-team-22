import { useEffect, useState } from "react";
import type { RecentResult } from "@/types";
import { getRecentResults } from "@/api/services/results";

export const useRecentResults = () => {
  const [recentResults, setRecentResults] = useState<RecentResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchRecentResults = async () => {
    setLoading(true);
    setError(null);

    try {
      const results = await getRecentResults();
      setRecentResults(results);
    } catch (error) {
      console.error("최근 검색 기록을 불러오는 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentResults();
  }, []);
  return {
    recentResults,
    setRecentResults,
    loading,
    error,
    refetch: fetchRecentResults,
  };
};
