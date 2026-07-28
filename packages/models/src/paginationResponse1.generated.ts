import { z } from "zod";

export type PaginationResponse1 = {
  after?: (string | null) | undefined;
  before?: (string | null) | undefined;
  totalResultSize?: (number | null) | undefined;
};

export const paginationResponse1 = z.object({
  after: z.string().nullable().optional(),
  before: z.string().nullable().optional(),
  totalResultSize: z.number().int().nullable().optional(),
});
