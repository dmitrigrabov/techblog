import { type State, state } from "packages/models/src/state.generated.ts";
import { type CountryCode2, countryCode2 } from "packages/models/src/countryCode2.generated.ts";
import { z } from "zod";

export type Address1 = {
  line1: string;
  line2?: string | undefined;
  town: string;
  state?: State | undefined;
  postcode: string;
  country: CountryCode2;
};

export const address1 = z.object({
  line1: z.string(),
  line2: z.string().optional(),
  town: z.string(),
  state: state.optional(),
  postcode: z.string(),
  country: countryCode2,
});
