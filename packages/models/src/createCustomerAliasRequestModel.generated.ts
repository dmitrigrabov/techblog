import { z } from "zod";

export type CreateCustomerAliasRequestModel = {
  customerId: string;
  value: string;
  label?: string | undefined;
};

export const createCustomerAliasRequestModel = z.object({
  customerId: z.string(),
  value: z.string(),
  label: z.string().optional(),
});
