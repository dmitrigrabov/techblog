import { z } from "zod";

export type VolumeUsageTier = {
  upperBound?: string | undefined;
  price: string;
  fee?: string | undefined;
  isPricePercentage: boolean;
  maxPrice?: string | undefined;
  minPrice?: string | undefined;
};

export const volumeUsageTier = z.object({
  upperBound: z.string().optional(),
  price: z.string(),
  fee: z.string().optional(),
  isPricePercentage: z.boolean(),
  maxPrice: z.string().optional(),
  minPrice: z.string().optional(),
});
