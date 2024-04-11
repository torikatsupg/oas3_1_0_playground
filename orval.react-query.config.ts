import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "./__api__/index.yaml",
    },
    output: {
      target: "./src/gen/hooks/",
      mode: "tags-split",
      client: "react-query",
      mock: true,
      override: {
        zod: {
          strict: {
            response: true,
            query: true,
            param: true,
            header: true,
            body: true,
          },
        },
        useDates: true,
        useNamedParameters: true,
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
