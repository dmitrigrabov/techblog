import {
  type AppliedCreditNoteLineItemResponse,
  appliedCreditNoteLineItemResponse,
} from "packages/models/src/appliedCreditNoteLineItemResponse.generated.ts";
import { z } from "zod";

export type AppliedCreditNoteResponse = {
  id: string;
  creditNoteNumber?: string | undefined;
  netTotal: string;
  totalTax: string;
  grossTotal: string;
  lineItems: Array<AppliedCreditNoteLineItemResponse>;
};

export const appliedCreditNoteResponse = z.object({
  id: z.string(),
  creditNoteNumber: z.string().optional(),
  netTotal: z.string(),
  totalTax: z.string(),
  grossTotal: z.string(),
  lineItems: z.array(appliedCreditNoteLineItemResponse),
});
