import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8080/gql",
  documents: ["graphql/**/*.gql"],
  generates: {
    "graphql/_generated_/_gql_.ts": {
      // preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-document-nodes",
        "typescript-react-query",
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
      ],
      overwrite: true,
      config: {
        fetcher: {
          endpoint: "http://localhost:8080/gql",
          fetchParams: {
            headers: {
              "Content-Type": "application/json",
            },
          },
        },
      },
    },
  },
};

export default config;
