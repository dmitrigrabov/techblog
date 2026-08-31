import { type CountryCode, countryCode } from "packages/models/src/countryCode.generated.ts";
import { type State, state } from "packages/models/src/state.generated.ts";
import { z } from "zod";

export type MerchantTaxRegistration = {
  id: string;
  sequenceAccountId: string;
  taxIdentifier: string;
  merchantId: string;
  country: CountryCode;
  state?: State | undefined;
};

export const merchantTaxRegistration = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  taxIdentifier: z.string(),
  merchantId: z.string(),
  country: countryCode,
  state: state.optional(),
});
