import { z } from "zod";

export type InclusiveDateRange = { start: string; endInclusive: string };

export const inclusiveDateRange = z.object({ start: z.string(), endInclusive: z.string() });
