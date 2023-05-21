import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacex-production.up.railway.app/",
  documents: "src/graphql/operation-codegen.ts",
  generates: {
    "src/types/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  watch: true,
};

export default config;
