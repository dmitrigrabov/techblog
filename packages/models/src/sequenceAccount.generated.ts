import { type CountryCode1, countryCode1 } from "packages/models/src/countryCode1.generated.ts";
import { z } from "zod";

export type SequenceAccount = {
  id: string;
  createdAt: string;
  sequenceOrganisationId: string;
  companyName: string;
  companyNumber: string;
  country: CountryCode1;
  sendCustomerNotifications: boolean;
  alertEmailAddresses: Array<string>;
};

export const sequenceAccount = z.object({
  id: z.string(),
  createdAt: z.string(),
  sequenceOrganisationId: z.string(),
  companyName: z.string(),
  companyNumber: z.string(),
  country: countryCode1,
  sendCustomerNotifications: z.boolean(),
  alertEmailAddresses: z.array(z.string()),
});
