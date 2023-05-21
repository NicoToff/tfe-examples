// src/hooks/react-query.ts
import { findRocket } from "@/graphql/operation-codegen";
import { useQuery } from "@tanstack/react-query";

export function useRocket(
  rocketId: string,
  initialData: Awaited<ReturnType<typeof findRocket>> | undefined
) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["rocket", rocketId],
    queryFn: () => findRocket({ rocketId }),
    initialData,
    refetchInterval: 1000,
    retry: 1,
    retryDelay: 2500,
  });
  return { data, isLoading, isError };
}
