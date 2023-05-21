import { request } from "graphql-request";
// src/graphql/operation-codegen.ts
import { graphql } from "@/types/gql";
import { RocketQueryVariables } from "@/types/graphql";

const api = "https://spacex-production.up.railway.app/";

const rocketDocument = graphql(`
  query Rocket($rocketId: ID!) {
    rocket(id: $rocketId) {
      name
      diameter {
        meters
      }
    }
  }
`);

export const findRocket = async (vars: RocketQueryVariables) => {
  try {
    return await request(api, rocketDocument, vars);
  } catch (error) {
    console.error(error);
  }
};
