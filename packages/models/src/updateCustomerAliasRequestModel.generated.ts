import { z } from "zod";

export type UpdateCustomerAliasRequestModel = { label?: string | undefined };

export const updateCustomerAliasRequestModel = z.object({ label: z.string().optional() });
