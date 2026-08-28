import { type CountryCode, countryCode } from "packages/models/src/countryCode.generated.ts";
import { type State, state } from "packages/models/src/state.generated.ts";
import { z } from "zod";

export type CreateTaxRegistrationRequestModel = {
  taxIdentifier: string;
  customerId?: string | undefined;
  merchantId?: string | undefined;
  country: CountryCode;
  state?: State | undefined;
};

export const createTaxRegistrationRequestModel = z.object({
  taxIdentifier: z.string(),
  customerId: z.string().optional(),
  merchantId: z.string().optional(),
  country: countryCode,
  state: state.optional(),
});
