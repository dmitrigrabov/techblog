import { z } from "zod";

export type PricingType1 =
  | "ONE_TIME"
  | "FIXED"
  | "LINEAR"
  | "PACKAGE"
  | "GRADUATED"
  | "VOLUME"
  | "SEAT_BASED";

export const pricingType1 = z.enum([
  "ONE_TIME",
  "FIXED",
  "LINEAR",
  "PACKAGE",
  "GRADUATED",
  "VOLUME",
  "SEAT_BASED",
]);
