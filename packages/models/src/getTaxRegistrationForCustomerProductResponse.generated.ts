import {
  type GetTaxRegistrationForCustomerCustomerTaxRegistration,
  getTaxRegistrationForCustomerCustomerTaxRegistration,
} from "packages/models/src/getTaxRegistrationForCustomerCustomerTaxRegistration.generated.ts";
import {
  type PaginationResponse2,
  paginationResponse2,
} from "packages/models/src/paginationResponse2.generated.ts";
import { z } from "zod";

export type GetTaxRegistrationForCustomerProductResponse = {
  items: Array<GetTaxRegistrationForCustomerCustomerTaxRegistration>;
  pagination: PaginationResponse2;
};

export const getTaxRegistrationForCustomerProductResponse = z.object({
  items: z.array(getTaxRegistrationForCustomerCustomerTaxRegistration),
  pagination: paginationResponse2,
});
