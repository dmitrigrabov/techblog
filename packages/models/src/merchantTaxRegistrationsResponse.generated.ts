import {
  type MerchantTaxRegistration,
  merchantTaxRegistration,
} from "packages/models/src/merchantTaxRegistration.generated.ts";
import {
  type PaginationResponse1,
  paginationResponse1,
} from "packages/models/src/paginationResponse1.generated.ts";
import { z } from "zod";

export type MerchantTaxRegistrationsResponse = {
  items: Array<MerchantTaxRegistration>;
  pagination: PaginationResponse1;
};

export const merchantTaxRegistrationsResponse = z.object({
  items: z.array(merchantTaxRegistration),
  pagination: paginationResponse1,
});
