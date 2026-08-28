import { z } from "zod";

export type SeatProrationStrategy = "USE_MAXIMUM" | "PRORATE_INCREMENTS" | "PRORATE_ALL_CHANGES";

export const seatProrationStrategy = z.enum([
  "USE_MAXIMUM",
  "PRORATE_INCREMENTS",
  "PRORATE_ALL_CHANGES",
]);
