import { z } from "zod";

export type RevenueRecognitionMethod1 = "STRAIGHT_LINE" | "USAGE" | "MILESTONE" | "POINT_IN_TIME";

export const revenueRecognitionMethod1 = z.enum([
  "STRAIGHT_LINE",
  "USAGE",
  "MILESTONE",
  "POINT_IN_TIME",
]);
