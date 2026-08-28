import {
  type ApiBillingScheduleStatus,
  apiBillingScheduleStatus,
} from "packages/models/src/apiBillingScheduleStatus.generated.ts";
import {
  type ProductTaxRateRepresentation,
  productTaxRateRepresentation,
} from "packages/models/src/productTaxRateRepresentation.generated.ts";
import { type PriceResponse, priceResponse } from "packages/models/src/priceResponse.generated.ts";
import { type Phase, phase } from "packages/models/src/phase.generated.ts";
import {
  type IntegrationId2,
  integrationId2,
} from "packages/models/src/integrationId2.generated.ts";
import { type AssetResponse, assetResponse } from "packages/models/src/assetResponse.generated.ts";
import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type BillingScheduleResponse = {
  id: string;
  customerId: string;
  status: ApiBillingScheduleStatus;
  startDate: string;
  endDate?: string | undefined;
  taxRates?: Array<ProductTaxRateRepresentation> | undefined;
  firstBillingDate?: string | undefined;
  autoIssueInvoices: boolean;
  purchaseOrderNumber?: string | undefined;
  reference?: string | undefined;
  label?: string | undefined;
  recurrenceDayOfMonth?: number | undefined;
  prices: Array<PriceResponse>;
  createdAt: string;
  updatedAt: string;
  lastInvoiceId?: string | undefined;
  phases: Array<Phase>;
  archivedAt?: string | undefined;
  rollUpBilling: boolean;
  integrationIds: Array<IntegrationId2>;
  attachmentAssets: Array<AssetResponse>;
  contractId?: string | undefined;
  defaultDueDateDays?: number | undefined;
  memo?: string | undefined;
  customFields: Record<string, string>;
  paymentProvider?: PaymentProvider | undefined;
  autoCharge?: boolean | undefined;
};

export const billingScheduleResponse = z.object({
  id: z.string(),
  customerId: z.string(),
  status: apiBillingScheduleStatus,
  startDate: z.string(),
  endDate: z.string().optional(),
  taxRates: z.array(productTaxRateRepresentation).optional(),
  firstBillingDate: z.string().optional(),
  autoIssueInvoices: z.boolean(),
  purchaseOrderNumber: z.string().optional(),
  reference: z.string().optional(),
  label: z.string().optional(),
  recurrenceDayOfMonth: z.number().int().optional(),
  prices: z.array(priceResponse),
  createdAt: z.string(),
  updatedAt: z.string(),
  lastInvoiceId: z.string().optional(),
  phases: z.array(phase),
  archivedAt: z.string().optional(),
  rollUpBilling: z.boolean(),
  integrationIds: z.array(integrationId2),
  attachmentAssets: z.array(assetResponse),
  contractId: z.string().optional(),
  defaultDueDateDays: z.number().int().optional(),
  memo: z.string().optional(),
  customFields: z.record(z.string(), z.string()),
  paymentProvider: paymentProvider.optional(),
  autoCharge: z.boolean().optional(),
});
