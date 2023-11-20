import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: 'https://em40ts9ghi.execute-api.us-east-1.amazonaws.com/dev',
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
