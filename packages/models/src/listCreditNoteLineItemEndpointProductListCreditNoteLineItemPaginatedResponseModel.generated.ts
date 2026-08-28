import {
  type ListCreditNoteLineItemEndpointProductListCreditNoteLineItemResponseModel,
  listCreditNoteLineItemEndpointProductListCreditNoteLineItemResponseModel,
} from "packages/models/src/listCreditNoteLineItemEndpointProductListCreditNoteLineItemResponseModel.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListCreditNoteLineItemEndpointProductListCreditNoteLineItemPaginatedResponseModel = {
  items: Array<ListCreditNoteLineItemEndpointProductListCreditNoteLineItemResponseModel>;
  pagination: PaginationMeta;
};

export const listCreditNoteLineItemEndpointProductListCreditNoteLineItemPaginatedResponseModel =
  z.object({
    items: z.array(listCreditNoteLineItemEndpointProductListCreditNoteLineItemResponseModel),
    pagination: paginationMeta,
  });
