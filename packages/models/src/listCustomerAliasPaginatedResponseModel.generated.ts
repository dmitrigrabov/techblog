import {
  type CustomerAliasResponseModel,
  customerAliasResponseModel,
} from "packages/models/src/customerAliasResponseModel.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListCustomerAliasPaginatedResponseModel = {
  items: Array<CustomerAliasResponseModel>;
  pagination: PaginationMeta;
};

export const listCustomerAliasPaginatedResponseModel = z.object({
  items: z.array(customerAliasResponseModel),
  pagination: paginationMeta,
});
