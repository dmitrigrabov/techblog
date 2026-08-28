import { z } from "zod";

export type SortCodeAccountNumber = { sortCode: string; accountNumber: string };

export const sortCodeAccountNumber = z.object({ sortCode: z.string(), accountNumber: z.string() });
