import { z } from "zod";

export type ReconcileInvoicesWithIntegrationEndpointPropertyToCompare = "INVOICE_NUMBER" | "STATUS";

export const reconcileInvoicesWithIntegrationEndpointPropertyToCompare = z.enum([
  "INVOICE_NUMBER",
  "STATUS",
]);
