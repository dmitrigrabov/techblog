import { z } from "zod";

export type CustomerAliasResponseModel = {
  id: string;
  sequenceAccountId: string;
  customerId: string;
  value: string;
  createdAt: string;
  deletedAt?: string | undefined;
  label?: string | undefined;
  archivedAt?: string | undefined;
};

export const customerAliasResponseModel = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  customerId: z.string(),
  value: z.string(),
  createdAt: z.string(),
  deletedAt: z.string().optional(),
  label: z.string().optional(),
  archivedAt: z.string().optional(),
});
