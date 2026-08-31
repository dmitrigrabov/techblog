import { z } from "zod";

export type DatabaseErrors = { errors: Array<unknown> };

export const databaseErrors = z.object({ errors: z.array(z.unknown()) });
