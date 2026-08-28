import { z } from "zod";

export type Stable20240509ProductResponse = {
  id: string;
  name: string;
  label?: string | undefined;
  createdAt: string;
  updatedAt: string;
  archivedAt?: string | undefined;
};

export const stable20240509ProductResponse = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  archivedAt: z.string().optional(),
});
