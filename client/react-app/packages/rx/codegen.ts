import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: 'http://localhost:3000/dev/graphql',
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
