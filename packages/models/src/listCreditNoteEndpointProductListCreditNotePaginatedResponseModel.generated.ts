import { type CreditNote, creditNote } from "packages/models/src/creditNote.generated.ts";
import {
  type PaginationResponse3,
  paginationResponse3,
} from "packages/models/src/paginationResponse3.generated.ts";
import { z } from "zod";

export type ListCreditNoteEndpointProductListCreditNotePaginatedResponseModel = {
  items: Array<CreditNote>;
  pagination: PaginationResponse3;
};

export const listCreditNoteEndpointProductListCreditNotePaginatedResponseModel = z.object({
  items: z.array(creditNote),
  pagination: paginationResponse3,
});
