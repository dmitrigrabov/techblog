import { z } from "zod";

export type PaginationMeta1 = {
  after?: string | undefined;
  before?: string | undefined;
  totalResultSize?: number | undefined;
};

export const paginationMeta1 = z.object({
  after: z.string().optional(),
  before: z.string().optional(),
  totalResultSize: z.number().int().optional(),
});
