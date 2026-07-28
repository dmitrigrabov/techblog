import { z } from "zod";

export type ContactBillingPreference = "PRIMARY" | "STANDARD" | "NONE";

export const contactBillingPreference = z.enum(["PRIMARY", "STANDARD", "NONE"]);
