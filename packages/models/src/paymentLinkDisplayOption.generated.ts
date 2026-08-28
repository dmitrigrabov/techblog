import { z } from "zod";

export type PaymentLinkDisplayOption = "SHOW_PAYMENT_LINK" | "HIDE_PAYMENT_LINK";

export const paymentLinkDisplayOption = z.enum(["SHOW_PAYMENT_LINK", "HIDE_PAYMENT_LINK"]);
