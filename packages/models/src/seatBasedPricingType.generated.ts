import { z } from "zod";

export type SeatBasedPricingType = "SEAT_BASED";

export const seatBasedPricingType = z.literal("SEAT_BASED");
