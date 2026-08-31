import {
  type ContactBillingPreference,
  contactBillingPreference,
} from "packages/models/src/contactBillingPreference.generated.ts";
import { z } from "zod";

export type Contact = {
  id: string;
  name: string;
  email: string;
  billingPreference: ContactBillingPreference;
  createdAt: string;
  updatedAt: string;
  archivedAt?: string | undefined;
};

export const contact = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  billingPreference: contactBillingPreference,
  createdAt: z.string(),
  updatedAt: z.string(),
  archivedAt: z.string().optional(),
});
