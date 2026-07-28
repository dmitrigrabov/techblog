import { type CreditNote, creditNote } from "packages/models/src/creditNote.generated.ts";
import {
  type PaginationResponse,
  paginationResponse,
} from "packages/models/src/paginationResponse.generated.ts";
import { z } from "zod";

export type ListCreditNoteEndpointProductListCreditNotePaginatedResponseModel = {
  items: Array<CreditNote>;
  pagination: PaginationResponse;
};

export const listCreditNoteEndpointProductListCreditNotePaginatedResponseModel = z.object({
  items: z.array(creditNote),
  pagination: paginationResponse,
});
