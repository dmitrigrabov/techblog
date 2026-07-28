import { z } from "zod";

export type QuoteStatus =
  | "DRAFT"
  | "PUBLISHED"
  | "PREPARING_SIGNATURE_REQUEST"
  | "READY_TO_SIGN"
  | "ACCEPTED"
  | "EXECUTED";

export const quoteStatus = z.enum([
  "DRAFT",
  "PUBLISHED",
  "PREPARING_SIGNATURE_REQUEST",
  "READY_TO_SIGN",
  "ACCEPTED",
  "EXECUTED",
]);
