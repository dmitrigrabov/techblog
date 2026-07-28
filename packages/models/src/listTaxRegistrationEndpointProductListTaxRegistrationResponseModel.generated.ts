import { type CountryCode3, countryCode3 } from "packages/models/src/countryCode3.generated.ts";
import { type State, state } from "packages/models/src/state.generated.ts";
import { z } from "zod";

export type ListTaxRegistrationEndpointProductListTaxRegistrationResponseModel = {
  id: string;
  sequenceAccountId: string;
  taxIdentifier: string;
  customerId?: (string | null) | undefined;
  merchantId?: (string | null) | undefined;
  country: CountryCode3;
  state?: State | undefined;
};

export const listTaxRegistrationEndpointProductListTaxRegistrationResponseModel = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  taxIdentifier: z.string(),
  customerId: z.string().nullable().optional(),
  merchantId: z.string().nullable().optional(),
  country: countryCode3,
  state: state.optional(),
});
