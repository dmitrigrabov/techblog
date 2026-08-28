import { z } from "zod";

export type ListBillingScheduleCustomFieldKeysResponse = { items: Array<string> };

export const listBillingScheduleCustomFieldKeysResponse = z.object({ items: z.array(z.string()) });
