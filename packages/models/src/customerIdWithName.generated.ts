import { z } from "zod";

export type CustomerIdWithName = { id: string; name: string };

export const customerIdWithName = z.object({ id: z.string(), name: z.string() });
