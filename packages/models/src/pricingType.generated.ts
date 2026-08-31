import { z } from "zod";

export type PricingType =
  | "ONE_TIME"
  | "FIXED"
  | "LINEAR"
  | "PACKAGE"
  | "GRADUATED"
  | "VOLUME"
  | "SEAT_BASED";

export const pricingType = z.enum([
  "ONE_TIME",
  "FIXED",
  "LINEAR",
  "PACKAGE",
  "GRADUATED",
  "VOLUME",
  "SEAT_BASED",
]);
