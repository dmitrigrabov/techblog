import {
  type CustomerSeatBalances,
  customerSeatBalances,
} from "packages/models/src/customerSeatBalances.generated.ts";
import {
  type PaginationMeta2,
  paginationMeta2,
} from "packages/models/src/paginationMeta2.generated.ts";
import { z } from "zod";

export type ListCustomerSeatBalancesEndpointListCustomerSeatBalancesPaginatedResponseModel = {
  items: Array<CustomerSeatBalances>;
  pagination: PaginationMeta2;
};

export const listCustomerSeatBalancesEndpointListCustomerSeatBalancesPaginatedResponseModel =
  z.object({ items: z.array(customerSeatBalances), pagination: paginationMeta2 });
