import { type Address1, address1 } from "packages/models/src/address1.generated.ts";
import { type KeyValuePair, keyValuePair } from "packages/models/src/keyValuePair.generated.ts";
import {
  type CreditNoteSettings,
  creditNoteSettings,
} from "packages/models/src/creditNoteSettings.generated.ts";
import { z } from "zod";

export type UpdateCreditNoteEndpointUpdateCreditNoteRequestModel = {
  billingPeriodStart?: string | undefined;
  billingPeriodEnd?: string | undefined;
  purchaseOrderNumber?: string | undefined;
  customerEmails?: Array<string> | undefined;
  customerLegalCompanyName?: string | undefined;
  customerBillingAddress?: Address1 | undefined;
  customerShippingAddress?: Address1 | undefined;
  memo?: string | undefined;
  metadata?: Array<KeyValuePair> | undefined;
  customerTaxId?: string | undefined;
  settings?: CreditNoteSettings | undefined;
  accountingDate?: string | undefined;
};

export const updateCreditNoteEndpointUpdateCreditNoteRequestModel = z.object({
  billingPeriodStart: z.string().optional(),
  billingPeriodEnd: z.string().optional(),
  purchaseOrderNumber: z.string().optional(),
  customerEmails: z.array(z.string()).optional(),
  customerLegalCompanyName: z.string().optional(),
  customerBillingAddress: address1.optional(),
  customerShippingAddress: address1.optional(),
  memo: z.string().optional(),
  metadata: z.array(keyValuePair).optional(),
  customerTaxId: z.string().optional(),
  settings: creditNoteSettings.optional(),
  accountingDate: z.string().optional(),
});
