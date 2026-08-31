import { z } from "zod";

export type Stable20240730ProductResponse = {
  id: string;
  name: string;
  label?: string | undefined;
  taxCategoryId?: string | undefined;
  createdAt: string;
  updatedAt: string;
};

export const stable20240730ProductResponse = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string().optional(),
  taxCategoryId: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
