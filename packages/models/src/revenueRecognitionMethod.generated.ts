import { z } from "zod";

export type RevenueRecognitionMethod = "STRAIGHT_LINE" | "USAGE" | "MILESTONE" | "POINT_IN_TIME";

export const revenueRecognitionMethod = z.enum([
  "STRAIGHT_LINE",
  "USAGE",
  "MILESTONE",
  "POINT_IN_TIME",
]);
