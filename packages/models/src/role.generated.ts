import { z } from "zod";

export type Role = Record<string, never>;

export const role = z.object({});
