import {
  type ListCustomerResponseModel,
  listCustomerResponseModel,
} from "packages/models/src/listCustomerResponseModel.generated.ts";
import {
  type PaginationMeta5,
  paginationMeta5,
} from "packages/models/src/paginationMeta5.generated.ts";
import { z } from "zod";

export type ListCustomerResponse = {
  items: Array<ListCustomerResponseModel>;
  pagination: PaginationMeta5;
};

export const listCustomerResponse = z.object({
  items: z.array(listCustomerResponseModel),
  pagination: paginationMeta5,
});
