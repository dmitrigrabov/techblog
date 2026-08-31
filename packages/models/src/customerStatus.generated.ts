import { z } from "zod";

export type CustomerStatus = "DRAFT" | "ACTIVE";

export const customerStatus = z.enum(["DRAFT", "ACTIVE"]);
