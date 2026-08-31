import { type Address, address } from "packages/models/src/address.generated.ts";
import { type TaxStatus, taxStatus } from "packages/models/src/taxStatus.generated.ts";
import {
  type GenerateIntegrationIdRequest,
  generateIntegrationIdRequest,
} from "packages/models/src/generateIntegrationIdRequest.generated.ts";
import {
  type ContactRequestModel,
  contactRequestModel,
} from "packages/models/src/contactRequestModel.generated.ts";
import {
  type CreateOrUpdateCustomerRequestIntegration,
  createOrUpdateCustomerRequestIntegration,
} from "packages/models/src/createOrUpdateCustomerRequestIntegration.generated.ts";
import {
  type CustomerStatus,
  customerStatus,
} from "packages/models/src/customerStatus.generated.ts";
import { z } from "zod";

export type CreateOrUpdateCustomerRequest = {
  legalName: string;
  address: Address;
  url?: string | undefined;
  label?: string | undefined;
  taxStatus: TaxStatus;
  customerAliases?: Array<string> | undefined;
  integrationIds?: Array<GenerateIntegrationIdRequest> | undefined;
  parentId?: string | undefined;
  contacts: Array<ContactRequestModel>;
  pushToIntegrations?: Array<CreateOrUpdateCustomerRequestIntegration> | undefined;
  status?: CustomerStatus | undefined;
  customProperties?: Record<string, string> | undefined;
};

export const createOrUpdateCustomerRequest = z.object({
  legalName: z.string(),
  address: address,
  url: z.string().optional(),
  label: z.string().optional(),
  taxStatus: taxStatus,
  customerAliases: z.array(z.string()).optional(),
  integrationIds: z.array(generateIntegrationIdRequest).optional(),
  parentId: z.string().optional(),
  contacts: z.array(contactRequestModel),
  pushToIntegrations: z.array(createOrUpdateCustomerRequestIntegration).optional(),
  status: customerStatus.optional(),
  customProperties: z.record(z.string(), z.string()).optional(),
});
