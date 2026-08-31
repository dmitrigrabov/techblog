import {
  type ProductTaxRateRepresentation,
  productTaxRateRepresentation,
} from "packages/models/src/productTaxRateRepresentation.generated.ts";
import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { type PhaseRequest, phaseRequest } from "packages/models/src/phaseRequest.generated.ts";
import { z } from "zod";

export type CreateBillingScheduleRequest = {
  customerId: string;
  startDate: string;
  endDate?: string | undefined;
  recurrenceDayOfMonth?: number | undefined;
  taxRates: Array<ProductTaxRateRepresentation>;
  autoIssueInvoices: boolean;
  purchaseOrderNumber?: string | undefined;
  reference?: string | undefined;
  label?: string | undefined;
  paymentProvider?: PaymentProvider | undefined;
  isDraft: boolean;
  rollUpBilling: boolean;
  phases: Array<PhaseRequest>;
  attachmentAssetIds?: Array<string> | undefined;
  autoCharge?: boolean | undefined;
  defaultDueDateDays?: number | undefined;
  memo?: string | undefined;
  customFields?: Record<string, string> | undefined;
};

export const createBillingScheduleRequest = z.object({
  customerId: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  recurrenceDayOfMonth: z.number().int().optional(),
  taxRates: z.array(productTaxRateRepresentation),
  autoIssueInvoices: z.boolean(),
  purchaseOrderNumber: z.string().optional(),
  reference: z.string().optional(),
  label: z.string().optional(),
  paymentProvider: paymentProvider.optional(),
  isDraft: z.boolean(),
  rollUpBilling: z.boolean(),
  phases: z.array(phaseRequest),
  attachmentAssetIds: z.array(z.string()).optional(),
  autoCharge: z.boolean().optional(),
  defaultDueDateDays: z.number().int().optional(),
  memo: z.string().optional(),
  customFields: z.record(z.string(), z.string()).optional(),
});
