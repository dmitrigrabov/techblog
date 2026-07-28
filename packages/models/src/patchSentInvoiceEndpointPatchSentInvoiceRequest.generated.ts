import { z } from "zod";

export type PatchSentInvoiceEndpointPatchSentInvoiceRequest = {
  purchaseOrderNumber?: string | undefined;
};

export const patchSentInvoiceEndpointPatchSentInvoiceRequest = z.object({
  purchaseOrderNumber: z.string().optional(),
});
