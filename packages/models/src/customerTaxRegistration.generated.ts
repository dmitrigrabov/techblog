import { type CountryCode, countryCode } from "packages/models/src/countryCode.generated.ts";
import { type State, state } from "packages/models/src/state.generated.ts";
import { z } from "zod";

export type CustomerTaxRegistration = {
  id: string;
  sequenceAccountId: string;
  taxIdentifier: string;
  customerId: string;
  country: CountryCode;
  state?: State | undefined;
};

export const customerTaxRegistration = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  taxIdentifier: z.string(),
  customerId: z.string(),
  country: countryCode,
  state: state.optional(),
});
