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
import { z } from "zod";

export type Stable20240101CreateInvoiceRequest = {
  billingScheduleId?: string | undefined;
  currency: Currency;
  dueDate?: string | undefined;
  purchaseOrderNumber?: string | undefined;
  reference?: string | undefined;
  customerEmails?: Array<string> | undefined;
  customerLegalCompanyName?: string | undefined;
  customerBillingAddress?: Address1 | undefined;
  customerShippingAddress?: Address1 | undefined;
  memo?: string | undefined;
  paymentOptions?: Array<InvoicePaymentOption> | undefined;
  billingPeriod?: InclusiveDateRange | undefined;
  customerId: string;
  metadata?: Array<KeyValuePair> | undefined;
  creditBalances?: string | undefined;
  billingRunId?: string | undefined;
  accountingDate?: string | undefined;
  attachmentAssetIds?: Array<string> | undefined;
};

export const stable20240101CreateInvoiceRequest = z.object({
  billingScheduleId: z.string().optional(),
  currency: currency,
  dueDate: z.string().optional(),
  purchaseOrderNumber: z.string().optional(),
  reference: z.string().optional(),
  customerEmails: z.array(z.string()).optional(),
  customerLegalCompanyName: z.string().optional(),
  customerBillingAddress: address1.optional(),
  customerShippingAddress: address1.optional(),
  memo: z.string().optional(),
  paymentOptions: z.array(invoicePaymentOption).optional(),
  billingPeriod: inclusiveDateRange.optional(),
  customerId: z.string(),
  metadata: z.array(keyValuePair).optional(),
  creditBalances: z.string().optional(),
  billingRunId: z.string().optional(),
  accountingDate: z.string().optional(),
  attachmentAssetIds: z.array(z.string()).optional(),
});
