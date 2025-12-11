import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",

  datasource: {
    url: process.env.DATABASE_URL,
  },

  generator: {
    client: {
      provider: "prisma-client",
      output: "./src/generated/client",
    },
  },
});
