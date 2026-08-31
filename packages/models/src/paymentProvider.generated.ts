import { z } from "zod";

export type PaymentProvider = "STRIPE" | "GOCARDLESS" | "NONE";

export const paymentProvider = z.enum(["STRIPE", "GOCARDLESS", "NONE"]);
