import { z } from "zod";

export type SeatDiscountType = "INCLUDED_SEATS_ONLY" | "OVERAGE_SEATS_ONLY" | "ALL_SEATS";

export const seatDiscountType = z.enum(["INCLUDED_SEATS_ONLY", "OVERAGE_SEATS_ONLY", "ALL_SEATS"]);
