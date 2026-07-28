import { type State1, state1 } from "packages/models/src/state1.generated.ts";
import { type CountryCode2, countryCode2 } from "packages/models/src/countryCode2.generated.ts";
import { z } from "zod";

export type Address1 = {
  line1: string;
  town: string;
  state?: State1 | undefined;
  postcode: string;
  country: CountryCode2;
};

export const address1 = z.object({
  line1: z.string(),
  town: z.string(),
  state: state1.optional(),
  postcode: z.string(),
  country: countryCode2,
});
