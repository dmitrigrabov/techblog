import { z } from "zod";

export type KeyValuePair = { key: string; value: string };

export const keyValuePair = z.object({ key: z.string(), value: z.string() });
