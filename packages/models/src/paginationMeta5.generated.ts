import { z } from "zod";

export type PaginationMeta5 = {
  after?: string | undefined;
  before?: string | undefined;
  totalResultSize?: number | undefined;
};

export const paginationMeta5 = z.object({
  after: z.string().optional(),
  before: z.string().optional(),
  totalResultSize: z.number().int().optional(),
});
