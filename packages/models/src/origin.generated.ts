import { z } from "zod";

export type Origin = "MANUAL" | "STRIPE";

export const origin = z.enum(["MANUAL", "STRIPE"]);
