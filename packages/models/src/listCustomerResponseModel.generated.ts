import {
  type CustomerOrganization,
  customerOrganization,
} from "packages/models/src/customerOrganization.generated.ts";
import { type Address1, address1 } from "packages/models/src/address1.generated.ts";
import {
  type IntegrationId1,
  integrationId1,
} from "packages/models/src/integrationId1.generated.ts";
import { type TaxStatus, taxStatus } from "packages/models/src/taxStatus.generated.ts";
import { z } from "zod";

export type ListCustomerResponseModel = {
  id: string;
  createdAt: string;
  organizations: Array<CustomerOrganization>;
  legalName: string;
  address: Address1;
  url?: string | undefined;
  domain?: string | undefined;
  label?: string | undefined;
  integrationIds: Array<IntegrationId1>;
  archivedAt?: string | undefined;
  taxStatus: TaxStatus;
  customProperties: Record<string, string>;
};

export const listCustomerResponseModel = z.object({
  id: z.string(),
  createdAt: z.string(),
  organizations: z.array(customerOrganization),
  legalName: z.string(),
  address: address1,
  url: z.string().optional(),
  domain: z.string().optional(),
  label: z.string().optional(),
  integrationIds: z.array(integrationId1),
  archivedAt: z.string().optional(),
  taxStatus: taxStatus,
  customProperties: z.record(z.string(), z.string()),
});
