import { z } from "zod";

export type CustomParameterType = "INTEGER" | "POSITIVE_INTEGER" | "NUMBER" | "POSITIVE_NUMBER";

export const customParameterType = z.enum([
  "INTEGER",
  "POSITIVE_INTEGER",
  "NUMBER",
  "POSITIVE_NUMBER",
]);
