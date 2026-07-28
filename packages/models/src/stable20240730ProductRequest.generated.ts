import { z } from "zod";

export type Stable20240730ProductRequest = {
  name: string;
  label?: string | undefined;
  taxCategoryId?: string | undefined;
};

export const stable20240730ProductRequest = z.object({
  name: z.string(),
  label: z.string().optional(),
  taxCategoryId: z.string().optional(),
});
