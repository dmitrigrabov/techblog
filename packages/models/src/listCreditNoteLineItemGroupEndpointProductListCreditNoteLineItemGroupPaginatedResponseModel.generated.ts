import {
  type ListCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupResponseModel,
  listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupResponseModel,
} from "packages/models/src/listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupResponseModel.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupPaginatedResponseModel =
  {
    items: Array<ListCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupResponseModel>;
    pagination: PaginationMeta;
  };

export const listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupPaginatedResponseModel =
  z.object({
    items: z.array(
      listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupResponseModel,
    ),
    pagination: paginationMeta,
  });
