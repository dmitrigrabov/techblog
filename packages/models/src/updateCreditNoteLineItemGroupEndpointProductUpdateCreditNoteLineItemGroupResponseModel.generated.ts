import { z } from "zod";

export type UpdateCreditNoteLineItemGroupEndpointProductUpdateCreditNoteLineItemGroupResponseModel =
  {
    id: string;
    creditNoteId: string;
    lineItemGroupId?: string | undefined;
    title: string;
    description?: string | undefined;
    index: number;
    netTotal: string;
    totalTax: string;
    grossTotal: string;
  };

export const updateCreditNoteLineItemGroupEndpointProductUpdateCreditNoteLineItemGroupResponseModel =
  z.object({
    id: z.string(),
    creditNoteId: z.string(),
    lineItemGroupId: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    index: z.number().int(),
    netTotal: z.string(),
    totalTax: z.string(),
    grossTotal: z.string(),
  });
