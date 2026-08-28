import {
  type ContactBillingPreference,
  contactBillingPreference,
} from "packages/models/src/contactBillingPreference.generated.ts";
import { z } from "zod";

export type ContactRequestModel = {
  name: string;
  email: string;
  billingPreference: ContactBillingPreference;
};

export const contactRequestModel = z.object({
  name: z.string(),
  email: z.string(),
  billingPreference: contactBillingPreference,
});
