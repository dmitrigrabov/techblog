import { z } from "zod";

export type PaginationResponse = {
  after?: string | undefined;
  before?: string | undefined;
  totalResultSize?: number | undefined;
};

export const paginationResponse = z.object({
  after: z.string().optional(),
  before: z.string().optional(),
  totalResultSize: z.number().int().optional(),
});
