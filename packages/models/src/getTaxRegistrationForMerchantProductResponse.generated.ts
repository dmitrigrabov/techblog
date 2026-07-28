import {
  type GetTaxRegistrationForMerchantMerchantTaxRegistration,
  getTaxRegistrationForMerchantMerchantTaxRegistration,
} from "packages/models/src/getTaxRegistrationForMerchantMerchantTaxRegistration.generated.ts";
import {
  type PaginationResponse2,
  paginationResponse2,
} from "packages/models/src/paginationResponse2.generated.ts";
import { z } from "zod";

export type GetTaxRegistrationForMerchantProductResponse = {
  items: Array<GetTaxRegistrationForMerchantMerchantTaxRegistration>;
  pagination: PaginationResponse2;
};

export const getTaxRegistrationForMerchantProductResponse = z.object({
  items: z.array(getTaxRegistrationForMerchantMerchantTaxRegistration),
  pagination: paginationResponse2,
});
