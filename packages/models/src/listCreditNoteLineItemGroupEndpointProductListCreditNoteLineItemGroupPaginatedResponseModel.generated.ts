import {
  type ListCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupResponseModel,
  listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupResponseModel,
} from "packages/models/src/listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupResponseModel.generated.ts";
import {
  type PaginationMeta4,
  paginationMeta4,
} from "packages/models/src/paginationMeta4.generated.ts";
import { z } from "zod";

export type ListCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupPaginatedResponseModel =
  {
    items: Array<ListCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupResponseModel>;
    pagination: PaginationMeta4;
  };

export const listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupPaginatedResponseModel =
  z.object({
    items: z.array(
      listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupResponseModel,
    ),
    pagination: paginationMeta4,
  });
