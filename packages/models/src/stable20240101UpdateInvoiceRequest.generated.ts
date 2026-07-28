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
import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { z } from "zod";

export type Stable20240101UpdateInvoiceRequest = {
  dueDate?: string | undefined;
  purchaseOrderNumber?: string | undefined;
  reference?: string | undefined;
  customerEmails?: Array<string> | undefined;
  customerLegalCompanyName?: string | undefined;
  customerBillingAddress?: Address | undefined;
  customerShippingAddress?: Address | undefined;
  memo?: string | undefined;
  paymentOptions?: Array<InvoicePaymentOption> | undefined;
  billingPeriod?: InclusiveDateRange | undefined;
  metadata?: Array<KeyValuePair> | undefined;
  creditBalances?: string | undefined;
  billingRunId?: string | undefined;
  accountingDate?: string | undefined;
  attachmentAssetIds?: Array<string> | undefined;
  currency?: Currency | undefined;
};

export const stable20240101UpdateInvoiceRequest = z.object({
  dueDate: z.string().optional(),
  purchaseOrderNumber: z.string().optional(),
  reference: z.string().optional(),
  customerEmails: z.array(z.string()).optional(),
  customerLegalCompanyName: z.string().optional(),
  customerBillingAddress: address.optional(),
  customerShippingAddress: address.optional(),
  memo: z.string().optional(),
  paymentOptions: z.array(invoicePaymentOption).optional(),
  billingPeriod: inclusiveDateRange.optional(),
  metadata: z.array(keyValuePair).optional(),
  creditBalances: z.string().optional(),
  billingRunId: z.string().optional(),
  accountingDate: z.string().optional(),
  attachmentAssetIds: z.array(z.string()).optional(),
  currency: currency.optional(),
});
