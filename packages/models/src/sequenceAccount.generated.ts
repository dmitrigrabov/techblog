import { type CountryCode, countryCode } from "packages/models/src/countryCode.generated.ts";
import { z } from "zod";

export type SequenceAccount = {
  id: string;
  createdAt: string;
  sequenceOrganisationId: string;
  companyName: string;
  companyNumber: string;
  country: CountryCode;
  sendCustomerNotifications: boolean;
  alertEmailAddresses: Array<string>;
};

export const sequenceAccount = z.object({
  id: z.string(),
  createdAt: z.string(),
  sequenceOrganisationId: z.string(),
  companyName: z.string(),
  companyNumber: z.string(),
  country: countryCode,
  sendCustomerNotifications: z.boolean(),
  alertEmailAddresses: z.array(z.string()),
});
