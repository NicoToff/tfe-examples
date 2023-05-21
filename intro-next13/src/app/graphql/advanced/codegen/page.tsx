// app/graphql/advanced/codegen/page.tsx
import { findRocket } from "@/graphql/operation-codegen";
import { RocketData } from "@/components/rocket-data";
export default async function ReactQueryCodegenPage() {
  const rocketId = "5e9d0d95eda69955f709d1eb";
  const initialData = await findRocket({ rocketId });
  return (
    <main>
      <h1>GraphQL Advanced</h1>
      <RocketData initialData={initialData} rocketId={rocketId} />
    </main>
  );
}
