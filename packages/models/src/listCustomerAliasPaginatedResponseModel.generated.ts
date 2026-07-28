import {
  type CustomerAliasResponseModel,
  customerAliasResponseModel,
} from "packages/models/src/customerAliasResponseModel.generated.ts";
import {
  type PaginationMeta5,
  paginationMeta5,
} from "packages/models/src/paginationMeta5.generated.ts";
import { z } from "zod";

export type ListCustomerAliasPaginatedResponseModel = {
  items: Array<CustomerAliasResponseModel>;
  pagination: PaginationMeta5;
};

export const listCustomerAliasPaginatedResponseModel = z.object({
  items: z.array(customerAliasResponseModel),
  pagination: paginationMeta5,
});
