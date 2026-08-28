import { z } from "zod";

export type GraduatedUsageTier = {
  upperBound?: string | undefined;
  price: string;
  fee?: string | undefined;
  isPricePercentage: boolean;
};

export const graduatedUsageTier = z.object({
  upperBound: z.string().optional(),
  price: z.string(),
  fee: z.string().optional(),
  isPricePercentage: z.boolean(),
});
