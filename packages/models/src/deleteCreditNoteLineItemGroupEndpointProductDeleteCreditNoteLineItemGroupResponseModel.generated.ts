import { z } from "zod";

export type DeleteCreditNoteLineItemGroupEndpointProductDeleteCreditNoteLineItemGroupResponseModel =
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

export const deleteCreditNoteLineItemGroupEndpointProductDeleteCreditNoteLineItemGroupResponseModel =
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
