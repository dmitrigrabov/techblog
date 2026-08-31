import { z } from "zod";

export type MergeInvoicesEndpointRequestBody = { invoiceIds: Array<string> };

export const mergeInvoicesEndpointRequestBody = z.object({ invoiceIds: z.array(z.string()) });
