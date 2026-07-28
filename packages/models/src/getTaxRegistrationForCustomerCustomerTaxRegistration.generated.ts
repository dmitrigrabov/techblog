import { type CountryCode3, countryCode3 } from "packages/models/src/countryCode3.generated.ts";
import { type State, state } from "packages/models/src/state.generated.ts";
import { z } from "zod";

export type GetTaxRegistrationForCustomerCustomerTaxRegistration = {
  id: string;
  sequenceAccountId: string;
  taxIdentifier: string;
  customerId: string;
  country: CountryCode3;
  state?: State | undefined;
};

export const getTaxRegistrationForCustomerCustomerTaxRegistration = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  taxIdentifier: z.string(),
  customerId: z.string(),
  country: countryCode3,
  state: state.optional(),
});
