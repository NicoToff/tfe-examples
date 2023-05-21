// app/graphql/page.tsx
import { request, gql } from "graphql-request";

const api = "https://spacex-production.up.railway.app/";
const document = gql`
  {
    company {
      name
      ceo
      valuation
    }
  }
`;

type GqlResponse = {
  company: {
    name: string;
    ceo: string;
    valuation: number;
  };
};

export default async function GraphQLPage() {
  const res = await request<GqlResponse>(api, document);

  return (
    <main>
      <h1>GraphQL</h1>
      <h2>{res.company.name}</h2>
      <ul>
        <li>CEO: {res.company.ceo}</li>
        <li>Valuation: {res.company.valuation} $</li>
      </ul>
    </main>
  );
}
