import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "./__api__/index.yaml",
    },
    output: {
      target: "./src/gen",
      mode: "tags-split",
      client: "react-query",
      mock: true,
      override: {
        mutator: {
          path: "./src/httpClient.ts",
          name: "httpClient",
        },
        query: {
          useSuspenseQuery: true,
        },
      },
      prettier: true,
    },
  },
});
