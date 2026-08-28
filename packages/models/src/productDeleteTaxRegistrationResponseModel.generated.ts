import { type CountryCode, countryCode } from "packages/models/src/countryCode.generated.ts";
import { type State, state } from "packages/models/src/state.generated.ts";
import { z } from "zod";

export type ProductDeleteTaxRegistrationResponseModel = {
  id: string;
  sequenceAccountId: string;
  taxIdentifier: string;
  customerId?: string | undefined;
  merchantId?: string | undefined;
  country: CountryCode;
  state?: State | undefined;
};

export const productDeleteTaxRegistrationResponseModel = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  taxIdentifier: z.string(),
  customerId: z.string().optional(),
  merchantId: z.string().optional(),
  country: countryCode,
  state: state.optional(),
});
