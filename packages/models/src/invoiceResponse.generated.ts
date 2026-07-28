import { type InvoiceStatus, invoiceStatus } from "packages/models/src/invoiceStatus.generated.ts";
import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { type Address, address } from "packages/models/src/address.generated.ts";
import {
  type InvoicePaymentOption,
  invoicePaymentOption,
} from "packages/models/src/invoicePaymentOption.generated.ts";
import {
  type InclusiveDateRange,
  inclusiveDateRange,
} from "packages/models/src/inclusiveDateRange.generated.ts";
import { type KeyValuePair, keyValuePair } from "packages/models/src/keyValuePair.generated.ts";
import {
  type InvoicePaymentStatus,
  invoicePaymentStatus,
} from "packages/models/src/invoicePaymentStatus.generated.ts";
import { type LinkInfo, linkInfo } from "packages/models/src/linkInfo.generated.ts";
import {
  type InvoiceMerchantDetails,
  invoiceMerchantDetails,
} from "packages/models/src/invoiceMerchantDetails.generated.ts";
import {
  type InvoiceDunningStatus,
  invoiceDunningStatus,
} from "packages/models/src/invoiceDunningStatus.generated.ts";
import { type TaxStatus, taxStatus } from "packages/models/src/taxStatus.generated.ts";
import {
  type InvoiceRenderSettingsInlineAggregate,
  invoiceRenderSettingsInlineAggregate,
} from "packages/models/src/invoiceRenderSettingsInlineAggregate.generated.ts";
import {
  type AssetResponse1,
  assetResponse1,
} from "packages/models/src/assetResponse1.generated.ts";
import {
  type IntegrationPaymentStatuses,
  integrationPaymentStatuses,
} from "packages/models/src/integrationPaymentStatuses.generated.ts";
import {
  type AppliedCreditNoteResponse,
  appliedCreditNoteResponse,
} from "packages/models/src/appliedCreditNoteResponse.generated.ts";
import {
  type PaymentAllocationResponse,
  paymentAllocationResponse,
} from "packages/models/src/paymentAllocationResponse.generated.ts";
import { type DueDateSource, dueDateSource } from "packages/models/src/dueDateSource.generated.ts";
import { z } from "zod";

export type InvoiceResponse = {
  id: string;
  sequenceAccountId: string;
  billingScheduleId?: string | undefined;
  billingRunId?: string | undefined;
  status: InvoiceStatus;
  currency: Currency;
  invoiceNumber?: string | undefined;
  issueDate?: string | undefined;
  dueDate?: string | undefined;
  purchaseOrderNumber?: string | undefined;
  reference?: string | undefined;
  customerEmails: Array<string>;
  customerLegalCompanyName: string;
  customerBillingAddress: Address;
  customerShippingAddress: Address;
  memo?: string | undefined;
  paymentOptions?: Array<InvoicePaymentOption> | undefined;
  billingPeriod?: InclusiveDateRange | undefined;
  customerId: string;
  totalTax: string;
  netTotal: string;
  grossTotal: string;
  metadata: Array<KeyValuePair>;
  customerTaxId?: string | undefined;
  paymentStatus: InvoicePaymentStatus;
  createdAt: string;
  updatedAt: string;
  creditNoteIds: Array<string>;
  linkedServices: Array<LinkInfo>;
  merchantDetails?: InvoiceMerchantDetails | undefined;
  creditBalances?: string | undefined;
  dunningStatus?: InvoiceDunningStatus | undefined;
  accountingDate: string;
  calculatedAt?: string | undefined;
  customerTaxStatus?: TaxStatus | undefined;
  renderSettings: InvoiceRenderSettingsInlineAggregate;
  isCustomerArchived: boolean;
  attachmentAssets?: Array<AssetResponse1> | undefined;
  balance?: string | undefined;
  balanceVersion?: number | undefined;
  integrationPaymentStatuses: IntegrationPaymentStatuses;
  appliedCreditNotes: Array<AppliedCreditNoteResponse>;
  paymentAllocations: Array<PaymentAllocationResponse>;
  paymentTermDays?: number | undefined;
  dueDateSource: DueDateSource;
};

export const invoiceResponse = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  billingScheduleId: z.string().optional(),
  billingRunId: z.string().optional(),
  status: invoiceStatus,
  currency: currency,
  invoiceNumber: z.string().optional(),
  issueDate: z.string().optional(),
  dueDate: z.string().optional(),
  purchaseOrderNumber: z.string().optional(),
  reference: z.string().optional(),
  customerEmails: z.array(z.string()),
  customerLegalCompanyName: z.string(),
  customerBillingAddress: address,
  customerShippingAddress: address,
  memo: z.string().optional(),
  paymentOptions: z.array(invoicePaymentOption).optional(),
  billingPeriod: inclusiveDateRange.optional(),
  customerId: z.string(),
  totalTax: z.string(),
  netTotal: z.string(),
  grossTotal: z.string(),
  metadata: z.array(keyValuePair),
  customerTaxId: z.string().optional(),
  paymentStatus: invoicePaymentStatus,
  createdAt: z.string(),
  updatedAt: z.string(),
  creditNoteIds: z.array(z.string()),
  linkedServices: z.array(linkInfo),
  merchantDetails: invoiceMerchantDetails.optional(),
  creditBalances: z.string().optional(),
  dunningStatus: invoiceDunningStatus.optional(),
  accountingDate: z.string(),
  calculatedAt: z.string().optional(),
  customerTaxStatus: taxStatus.optional(),
  renderSettings: invoiceRenderSettingsInlineAggregate,
  isCustomerArchived: z.boolean(),
  attachmentAssets: z.array(assetResponse1).optional(),
  balance: z.string().optional(),
  balanceVersion: z.number().int().optional(),
  integrationPaymentStatuses: integrationPaymentStatuses,
  appliedCreditNotes: z.array(appliedCreditNoteResponse),
  paymentAllocations: z.array(paymentAllocationResponse),
  paymentTermDays: z.number().int().optional(),
  dueDateSource: dueDateSource,
});
