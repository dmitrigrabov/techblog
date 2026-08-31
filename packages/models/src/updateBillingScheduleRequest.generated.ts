import {
  type ProductTaxRateRepresentation,
  productTaxRateRepresentation,
} from "packages/models/src/productTaxRateRepresentation.generated.ts";
import { type PhaseRequest, phaseRequest } from "packages/models/src/phaseRequest.generated.ts";
import { z } from "zod";

export type UpdateBillingScheduleRequest = {
  startDate: string;
  endDate?: string | undefined;
  recurrenceDayOfMonth?: number | undefined;
  taxRates: Array<ProductTaxRateRepresentation>;
  autoIssueInvoices: boolean;
  purchaseOrderNumber?: string | undefined;
  rollUpBilling: boolean;
  phases: Array<PhaseRequest>;
  attachmentAssetIds?: Array<string> | undefined;
  defaultDueDateDays?: number | undefined;
  memo?: string | undefined;
  customFields?: Record<string, string> | undefined;
};

export const updateBillingScheduleRequest = z.object({
  startDate: z.string(),
  endDate: z.string().optional(),
  recurrenceDayOfMonth: z.number().int().optional(),
  taxRates: z.array(productTaxRateRepresentation),
  autoIssueInvoices: z.boolean(),
  purchaseOrderNumber: z.string().optional(),
  rollUpBilling: z.boolean(),
  phases: z.array(phaseRequest),
  attachmentAssetIds: z.array(z.string()).optional(),
  defaultDueDateDays: z.number().int().optional(),
  memo: z.string().optional(),
  customFields: z.record(z.string(), z.string()).optional(),
});
