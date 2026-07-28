import { type State, state } from "packages/models/src/state.generated.ts";
import { type CountryCode, countryCode } from "packages/models/src/countryCode.generated.ts";
import { z } from "zod";

export type Address = {
  line1: string;
  line2?: string | undefined;
  town: string;
  state?: State | undefined;
  postcode: string;
  country: CountryCode;
};

export const address = z.object({
  line1: z.string(),
  line2: z.string().optional(),
  town: z.string(),
  state: state.optional(),
  postcode: z.string(),
  country: countryCode,
});
