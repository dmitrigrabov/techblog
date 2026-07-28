import {
  type CreditNoteStatus,
  creditNoteStatus,
} from "packages/models/src/creditNoteStatus.generated.ts";
import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { type Address, address } from "packages/models/src/address.generated.ts";
import { type KeyValuePair, keyValuePair } from "packages/models/src/keyValuePair.generated.ts";
import { type LinkInfo, linkInfo } from "packages/models/src/linkInfo.generated.ts";
import {
  type CreditNoteApplicationStatus,
  creditNoteApplicationStatus,
} from "packages/models/src/creditNoteApplicationStatus.generated.ts";
import {
  type InvoiceMerchantDetails,
  invoiceMerchantDetails,
} from "packages/models/src/invoiceMerchantDetails.generated.ts";
import {
  type CreditNoteSettings,
  creditNoteSettings,
} from "packages/models/src/creditNoteSettings.generated.ts";
import { z } from "zod";

export type CreditNote = {
  id: string;
  sequenceAccountId: string;
  status: CreditNoteStatus;
  invoiceId?: string | undefined;
  invoiceNumber?: string | undefined;
  billingScheduleId?: string | undefined;
  currency: Currency;
  issueDate?: string | undefined;
  billingPeriodStart?: string | undefined;
  billingPeriodEnd?: string | undefined;
  creditNoteNumber?: string | undefined;
  purchaseOrderNumber?: string | undefined;
  customerId: string;
  customerEmails: Array<string>;
  customerLegalCompanyName: string;
  customerBillingAddress: Address;
  customerShippingAddress: Address;
  memo?: string | undefined;
  totalTax: string;
  netTotal: string;
  grossTotal: string;
  metadata: Array<KeyValuePair>;
  customerTaxId?: string | undefined;
  linkedServices: Array<LinkInfo>;
  applicationStatus?: CreditNoteApplicationStatus | undefined;
  merchantDetails?: InvoiceMerchantDetails | undefined;
  settings: CreditNoteSettings;
  accountingDate?: string | undefined;
};

export const creditNote = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  status: creditNoteStatus,
  invoiceId: z.string().optional(),
  invoiceNumber: z.string().optional(),
  billingScheduleId: z.string().optional(),
  currency: currency,
  issueDate: z.string().optional(),
  billingPeriodStart: z.string().optional(),
  billingPeriodEnd: z.string().optional(),
  creditNoteNumber: z.string().optional(),
  purchaseOrderNumber: z.string().optional(),
  customerId: z.string(),
  customerEmails: z.array(z.string()),
  customerLegalCompanyName: z.string(),
  customerBillingAddress: address,
  customerShippingAddress: address,
  memo: z.string().optional(),
  totalTax: z.string(),
  netTotal: z.string(),
  grossTotal: z.string(),
  metadata: z.array(keyValuePair),
  customerTaxId: z.string().optional(),
  linkedServices: z.array(linkInfo),
  applicationStatus: creditNoteApplicationStatus.optional(),
  merchantDetails: invoiceMerchantDetails.optional(),
  settings: creditNoteSettings,
  accountingDate: z.string().optional(),
});
