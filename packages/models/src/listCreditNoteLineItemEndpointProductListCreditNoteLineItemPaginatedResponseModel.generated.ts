import {
  type ListCreditNoteLineItemEndpointProductListCreditNoteLineItemResponseModel,
  listCreditNoteLineItemEndpointProductListCreditNoteLineItemResponseModel,
} from "packages/models/src/listCreditNoteLineItemEndpointProductListCreditNoteLineItemResponseModel.generated.ts";
import {
  type PaginationMeta4,
  paginationMeta4,
} from "packages/models/src/paginationMeta4.generated.ts";
import { z } from "zod";

export type ListCreditNoteLineItemEndpointProductListCreditNoteLineItemPaginatedResponseModel = {
  items: Array<ListCreditNoteLineItemEndpointProductListCreditNoteLineItemResponseModel>;
  pagination: PaginationMeta4;
};

export const listCreditNoteLineItemEndpointProductListCreditNoteLineItemPaginatedResponseModel =
  z.object({
    items: z.array(listCreditNoteLineItemEndpointProductListCreditNoteLineItemResponseModel),
    pagination: paginationMeta4,
  });
