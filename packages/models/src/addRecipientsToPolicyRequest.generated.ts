import { z } from "zod";

export type AddRecipientsToPolicyRequest = { recipients: Array<string> };

export const addRecipientsToPolicyRequest = z.object({ recipients: z.array(z.string()) });
