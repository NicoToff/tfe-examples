import { request, gql } from "graphql-request";

const api = "https://spacex-production.up.railway.app/";

const rocketDocument = gql`
  query Rocket($rocketId: ID!) {
    rocket(id: $rocketId) {
      name
      diameter {
        meters
      }
    }
  }
`;

export type RocketDocumentVariable = { rocketId: string };

export type FindRocketRes = {
  rocket: {
    name: string;
    diameter: { meters: number };
  };
};

export const findRocket = async (variables: RocketDocumentVariable) =>
  await request<FindRocketRes>(api, rocketDocument, variables);
