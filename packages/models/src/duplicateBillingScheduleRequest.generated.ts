import { z } from "zod";

export type DuplicateBillingScheduleRequest = { customerId: string };

export const duplicateBillingScheduleRequest = z.object({ customerId: z.string() });
