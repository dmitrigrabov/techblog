import { type Address1, address1 } from "packages/models/src/address1.generated.ts";
import { type TaxStatus, taxStatus } from "packages/models/src/taxStatus.generated.ts";
import {
  type GenerateIntegrationIdRequest1,
  generateIntegrationIdRequest1,
} from "packages/models/src/generateIntegrationIdRequest1.generated.ts";
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
  address: Address1;
  url?: string | undefined;
  label?: string | undefined;
  taxStatus: TaxStatus;
  customerAliases?: Array<string> | undefined;
  integrationIds?: Array<GenerateIntegrationIdRequest1> | undefined;
  parentId?: string | undefined;
  contacts: Array<ContactRequestModel>;
  pushToIntegrations?: Array<CreateOrUpdateCustomerRequestIntegration> | undefined;
  status?: CustomerStatus | undefined;
};

export const createOrUpdateCustomerRequest = z.object({
  legalName: z.string(),
  address: address1,
  url: z.string().optional(),
  label: z.string().optional(),
  taxStatus: taxStatus,
  customerAliases: z.array(z.string()).optional(),
  integrationIds: z.array(generateIntegrationIdRequest1).optional(),
  parentId: z.string().optional(),
  contacts: z.array(contactRequestModel),
  pushToIntegrations: z.array(createOrUpdateCustomerRequestIntegration).optional(),
  status: customerStatus.optional(),
});
