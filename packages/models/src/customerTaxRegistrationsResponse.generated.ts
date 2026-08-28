import {
  type CustomerTaxRegistration,
  customerTaxRegistration,
} from "packages/models/src/customerTaxRegistration.generated.ts";
import {
  type PaginationResponse1,
  paginationResponse1,
} from "packages/models/src/paginationResponse1.generated.ts";
import { z } from "zod";

export type CustomerTaxRegistrationsResponse = {
  items: Array<CustomerTaxRegistration>;
  pagination: PaginationResponse1;
};

export const customerTaxRegistrationsResponse = z.object({
  items: z.array(customerTaxRegistration),
  pagination: paginationResponse1,
});
