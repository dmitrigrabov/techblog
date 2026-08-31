import {
  type CustomerSeatBalances,
  customerSeatBalances,
} from "packages/models/src/customerSeatBalances.generated.ts";
import {
  type PaginationMeta1,
  paginationMeta1,
} from "packages/models/src/paginationMeta1.generated.ts";
import { z } from "zod";

export type ListCustomerSeatBalancesEndpointListCustomerSeatBalancesPaginatedResponseModel = {
  items: Array<CustomerSeatBalances>;
  pagination: PaginationMeta1;
};

export const listCustomerSeatBalancesEndpointListCustomerSeatBalancesPaginatedResponseModel =
  z.object({ items: z.array(customerSeatBalances), pagination: paginationMeta1 });
