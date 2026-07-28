import { z } from "zod";

export type PaginationResponse2 = {
  after?: (string | null) | undefined;
  before?: (string | null) | undefined;
  totalResultSize?: (number | null) | undefined;
};

export const paginationResponse2 = z.object({
  after: z.string().nullable().optional(),
  before: z.string().nullable().optional(),
  totalResultSize: z.number().int().nullable().optional(),
});
