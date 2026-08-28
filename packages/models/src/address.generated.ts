import { type State1, state1 } from "packages/models/src/state1.generated.ts";
import { type CountryCode1, countryCode1 } from "packages/models/src/countryCode1.generated.ts";
import { z } from "zod";

export type Address = {
  line1: string;
  town: string;
  state?: State1 | undefined;
  postcode: string;
  country: CountryCode1;
};

export const address = z.object({
  line1: z.string(),
  town: z.string(),
  state: state1.optional(),
  postcode: z.string(),
  country: countryCode1,
});
