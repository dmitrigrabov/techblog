import {
  type ListCustomerResponseModel,
  listCustomerResponseModel,
} from "packages/models/src/listCustomerResponseModel.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListCustomerResponse = {
  items: Array<ListCustomerResponseModel>;
  pagination: PaginationMeta;
};

export const listCustomerResponse = z.object({
  items: z.array(listCustomerResponseModel),
  pagination: paginationMeta,
});
