import { type CountryCode3, countryCode3 } from "packages/models/src/countryCode3.generated.ts";
import { type State, state } from "packages/models/src/state.generated.ts";
import { z } from "zod";

export type GetTaxRegistrationForMerchantMerchantTaxRegistration = {
  id: string;
  sequenceAccountId: string;
  taxIdentifier: string;
  merchantId: string;
  country: CountryCode3;
  state?: State | undefined;
};

export const getTaxRegistrationForMerchantMerchantTaxRegistration = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  taxIdentifier: z.string(),
  merchantId: z.string(),
  country: countryCode3,
  state: state.optional(),
});
