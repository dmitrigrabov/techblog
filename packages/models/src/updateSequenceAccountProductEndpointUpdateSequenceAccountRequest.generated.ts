import { type CountryCode1, countryCode1 } from "packages/models/src/countryCode1.generated.ts";
import { z } from "zod";

export type UpdateSequenceAccountProductEndpointUpdateSequenceAccountRequest = {
  companyName?: (string | null) | undefined;
  companyNumber?: (string | null) | undefined;
  country?: CountryCode1 | undefined;
  sendCustomerNotifications?: (boolean | null) | undefined;
  alertEmailAddresses?: (Array<string> | null) | undefined;
};

export const updateSequenceAccountProductEndpointUpdateSequenceAccountRequest = z.object({
  companyName: z.string().nullable().optional(),
  companyNumber: z.string().nullable().optional(),
  country: countryCode1.optional(),
  sendCustomerNotifications: z.boolean().nullable().optional(),
  alertEmailAddresses: z.array(z.string()).nullable().optional(),
});
