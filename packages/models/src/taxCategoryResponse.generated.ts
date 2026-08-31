import { z } from "zod";

export type TaxCategoryResponse = { id: string; name: string };

export const taxCategoryResponse = z.object({ id: z.string(), name: z.string() });
