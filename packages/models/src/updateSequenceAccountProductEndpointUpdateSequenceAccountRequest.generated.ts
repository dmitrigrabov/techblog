import { type CountryCode, countryCode } from "packages/models/src/countryCode.generated.ts";
import { z } from "zod";

export type UpdateSequenceAccountProductEndpointUpdateSequenceAccountRequest = {
  companyName?: (string | null) | undefined;
  companyNumber?: (string | null) | undefined;
  country?: CountryCode | undefined;
  sendCustomerNotifications?: (boolean | null) | undefined;
  alertEmailAddresses?: (Array<string> | null) | undefined;
};

export const updateSequenceAccountProductEndpointUpdateSequenceAccountRequest = z.object({
  companyName: z.string().nullable().optional(),
  companyNumber: z.string().nullable().optional(),
  country: countryCode.optional(),
  sendCustomerNotifications: z.boolean().nullable().optional(),
  alertEmailAddresses: z.array(z.string()).nullable().optional(),
});
