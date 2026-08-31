import { type InvoiceStatus, invoiceStatus } from "packages/models/src/invoiceStatus.generated.ts";
import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { type Address1, address1 } from "packages/models/src/address1.generated.ts";
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
import { z } from "zod";

export type DeleteInvoiceEndpointProductDeleteInvoiceResponseModel = {
  id: string;
  sequenceAccountId: string;
  billingScheduleId?: string | undefined;
  status: InvoiceStatus;
  currency: Currency;
  invoiceNumber?: string | undefined;
  issueDate?: string | undefined;
  dueDate?: string | undefined;
  purchaseOrderNumber?: string | undefined;
  reference?: string | undefined;
  customerEmails: Array<string>;
  customerLegalCompanyName: string;
  customerBillingAddress: Address1;
  customerShippingAddress: Address1;
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
};

export const deleteInvoiceEndpointProductDeleteInvoiceResponseModel = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  billingScheduleId: z.string().optional(),
  status: invoiceStatus,
  currency: currency,
  invoiceNumber: z.string().optional(),
  issueDate: z.string().optional(),
  dueDate: z.string().optional(),
  purchaseOrderNumber: z.string().optional(),
  reference: z.string().optional(),
  customerEmails: z.array(z.string()),
  customerLegalCompanyName: z.string(),
  customerBillingAddress: address1,
  customerShippingAddress: address1,
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
});
