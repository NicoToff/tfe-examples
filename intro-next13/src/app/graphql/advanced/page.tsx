// app/graphql/advanced/page.tsx
import { findRocket } from "@/graphql/operation";

export default async function GraphQLPage() {
  const res = await findRocket({ rocketId: "5e9d0d95eda69955f709d1eb" });
  return (
    <main>
      <h1>GraphQL Advanced</h1>
      <h2>{res.rocket.name}</h2>
      <ul>
        <li>Diameter: {res.rocket.diameter.meters} m.</li>
      </ul>
    </main>
  );
}
