// src/components/rocket-data.tsx
"use client";

import { findRocket } from "@/graphql/operation-codegen";
import { useRocket } from "@/hooks/react-query";

export type RocketDataProps = {
  rocketId: string;
  initialData?: Awaited<ReturnType<typeof findRocket>>;
};
export function RocketData({ rocketId, initialData }: RocketDataProps) {
  const { data, isLoading, isError } = useRocket(rocketId, initialData);
  if (isLoading) return <h2>Loading...</h2>;
  if (isError || !data?.rocket) return <h2>Error! The data could not be found.</h2>;
  return (
    <>
      <h2>{data.rocket.name}</h2>
      <ul>
        <li>Diameter: {data.rocket.diameter?.meters} m.</li>
      </ul>
    </>
  );
}
