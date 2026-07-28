import { type Address1, address1 } from "packages/models/src/address1.generated.ts";
import {
  type IntegrationId1,
  integrationId1,
} from "packages/models/src/integrationId1.generated.ts";
import { type TaxStatus, taxStatus } from "packages/models/src/taxStatus.generated.ts";
import { z } from "zod";

export type Customer20240509 = {
  id: string;
  createdAt: string;
  legalName: string;
  contactName?: string | undefined;
  address: Address1;
  email: string;
  telephone?: string | undefined;
  url?: string | undefined;
  label?: string | undefined;
  integrationIds: Array<IntegrationId1>;
  archivedAt?: string | undefined;
  billingEmails: Array<string>;
  taxStatus: TaxStatus;
};

export const customer20240509 = z.object({
  id: z.string(),
  createdAt: z.string(),
  legalName: z.string(),
  contactName: z.string().optional(),
  address: address1,
  email: z.string(),
  telephone: z.string().optional(),
  url: z.string().optional(),
  label: z.string().optional(),
  integrationIds: z.array(integrationId1),
  archivedAt: z.string().optional(),
  billingEmails: z.array(z.string()),
  taxStatus: taxStatus,
});
