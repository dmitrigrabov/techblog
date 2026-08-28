import {
  type CustomerOrganization,
  customerOrganization,
} from "packages/models/src/customerOrganization.generated.ts";
import { type Address, address } from "packages/models/src/address.generated.ts";
import { type IntegrationId, integrationId } from "packages/models/src/integrationId.generated.ts";
import { type TaxStatus, taxStatus } from "packages/models/src/taxStatus.generated.ts";
import { type Contact, contact } from "packages/models/src/contact.generated.ts";
import {
  type CustomerStatus,
  customerStatus,
} from "packages/models/src/customerStatus.generated.ts";
import { z } from "zod";

export type Customer = {
  id: string;
  createdAt: string;
  organizations: Array<CustomerOrganization>;
  legalName: string;
  address: Address;
  url?: string | undefined;
  domain?: string | undefined;
  label?: string | undefined;
  integrationIds: Array<IntegrationId>;
  archivedAt?: string | undefined;
  taxStatus: TaxStatus;
  contacts: Array<Contact>;
  status: CustomerStatus;
  customProperties: Record<string, string>;
};

export const customer = z.object({
  id: z.string(),
  createdAt: z.string(),
  organizations: z.array(customerOrganization),
  legalName: z.string(),
  address: address,
  url: z.string().optional(),
  domain: z.string().optional(),
  label: z.string().optional(),
  integrationIds: z.array(integrationId),
  archivedAt: z.string().optional(),
  taxStatus: taxStatus,
  contacts: z.array(contact),
  status: customerStatus,
  customProperties: z.record(z.string(), z.string()),
});
