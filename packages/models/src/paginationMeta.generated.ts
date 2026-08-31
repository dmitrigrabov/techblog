import { z } from "zod";

export type PaginationMeta = {
  after?: string | undefined;
  before?: string | undefined;
  totalResultSize?: number | undefined;
};

export const paginationMeta = z.object({
  after: z.string().optional(),
  before: z.string().optional(),
  totalResultSize: z.number().int().optional(),
});
