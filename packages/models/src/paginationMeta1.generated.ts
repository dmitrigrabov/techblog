import { z } from "zod";

export type PaginationMeta1 = {
  after?: (string | null) | undefined;
  before?: (string | null) | undefined;
  totalResultSize?: (number | null) | undefined;
};

export const paginationMeta1 = z.object({
  after: z.string().nullable().optional(),
  before: z.string().nullable().optional(),
  totalResultSize: z.number().int().nullable().optional(),
});
