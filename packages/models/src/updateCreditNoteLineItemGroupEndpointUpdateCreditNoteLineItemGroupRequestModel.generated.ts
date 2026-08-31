import { z } from "zod";

export type UpdateCreditNoteLineItemGroupEndpointUpdateCreditNoteLineItemGroupRequestModel = {
  title: string;
  description?: string | undefined;
};

export const updateCreditNoteLineItemGroupEndpointUpdateCreditNoteLineItemGroupRequestModel =
  z.object({ title: z.string(), description: z.string().optional() });
