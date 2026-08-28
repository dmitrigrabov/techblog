import { type PriceStatus, priceStatus } from "packages/models/src/priceStatus.generated.ts";
import { z } from "zod";

export type UpdatePriceRequest = { name: string; status?: PriceStatus | undefined };

export const updatePriceRequest = z.object({ name: z.string(), status: priceStatus.optional() });
