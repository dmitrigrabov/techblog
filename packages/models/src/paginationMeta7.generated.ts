import { z } from "zod";

export type PaginationMeta7 = {
  after?: string | undefined;
  before?: string | undefined;
  totalResultSize?: number | undefined;
};

export const paginationMeta7 = z.object({
  after: z.string().optional(),
  before: z.string().optional(),
  totalResultSize: z.number().int().optional(),
});
