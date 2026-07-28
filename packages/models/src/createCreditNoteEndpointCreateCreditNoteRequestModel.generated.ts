import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { type Address, address } from "packages/models/src/address.generated.ts";
import { type KeyValuePair, keyValuePair } from "packages/models/src/keyValuePair.generated.ts";
import { z } from "zod";

export type CreateCreditNoteEndpointCreateCreditNoteRequestModel = {
  invoiceId?: string | undefined;
  currency: Currency;
  billingPeriodStart?: string | undefined;
  billingPeriodEnd?: string | undefined;
  purchaseOrderNumber?: string | undefined;
  customerId: string;
  customerEmails?: Array<string> | undefined;
  customerLegalCompanyName?: string | undefined;
  customerBillingAddress?: Address | undefined;
  customerShippingAddress?: Address | undefined;
  memo?: string | undefined;
  metadata?: Array<KeyValuePair> | undefined;
  customerTaxId?: string | undefined;
  accountingDate?: string | undefined;
};

export const createCreditNoteEndpointCreateCreditNoteRequestModel = z.object({
  invoiceId: z.string().optional(),
  currency: currency,
  billingPeriodStart: z.string().optional(),
  billingPeriodEnd: z.string().optional(),
  purchaseOrderNumber: z.string().optional(),
  customerId: z.string(),
  customerEmails: z.array(z.string()).optional(),
  customerLegalCompanyName: z.string().optional(),
  customerBillingAddress: address.optional(),
  customerShippingAddress: address.optional(),
  memo: z.string().optional(),
  metadata: z.array(keyValuePair).optional(),
  customerTaxId: z.string().optional(),
  accountingDate: z.string().optional(),
});
