import {
  type ReconcileInvoicesWithIntegrationEndpointSupportedIntegrationService,
  reconcileInvoicesWithIntegrationEndpointSupportedIntegrationService,
} from "packages/models/src/reconcileInvoicesWithIntegrationEndpointSupportedIntegrationService.generated.ts";
import {
  type ReconcileInvoicesWithIntegrationEndpointPropertyToCompare,
  reconcileInvoicesWithIntegrationEndpointPropertyToCompare,
} from "packages/models/src/reconcileInvoicesWithIntegrationEndpointPropertyToCompare.generated.ts";
import { z } from "zod";

export type ReconcileInvoicesWithIntegrationEndpointReconcileInvoicesWithIntegrationRequest = {
  integrationService: ReconcileInvoicesWithIntegrationEndpointSupportedIntegrationService;
  invoiceIds: Array<string>;
  propertiesToCompare: Array<ReconcileInvoicesWithIntegrationEndpointPropertyToCompare>;
};

export const reconcileInvoicesWithIntegrationEndpointReconcileInvoicesWithIntegrationRequest =
  z.object({
    integrationService: reconcileInvoicesWithIntegrationEndpointSupportedIntegrationService,
    invoiceIds: z.array(z.string()),
    propertiesToCompare: z.array(reconcileInvoicesWithIntegrationEndpointPropertyToCompare),
  });
