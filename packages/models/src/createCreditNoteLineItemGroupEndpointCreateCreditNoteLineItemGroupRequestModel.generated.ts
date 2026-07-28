import { z } from "zod";

export type CreateCreditNoteLineItemGroupEndpointCreateCreditNoteLineItemGroupRequestModel = {
  lineItemGroupId?: string | undefined;
  title: string;
  description?: string | undefined;
};

export const createCreditNoteLineItemGroupEndpointCreateCreditNoteLineItemGroupRequestModel =
  z.object({
    lineItemGroupId: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
  });
