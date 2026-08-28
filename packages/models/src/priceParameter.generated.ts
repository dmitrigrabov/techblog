import { z } from "zod";

export type PriceParameter = { parameterId: string; value: string };

export const priceParameter = z.object({ parameterId: z.string(), value: z.string() });
