import { type InvoiceStatus, invoiceStatus } from "packages/models/src/invoiceStatus.generated.ts";
import {
  type InvoicePaymentStatus,
  invoicePaymentStatus,
} from "packages/models/src/invoicePaymentStatus.generated.ts";
import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type InclusiveDateRange,
  inclusiveDateRange,
} from "packages/models/src/inclusiveDateRange.generated.ts";
import { type LinkInfo, linkInfo } from "packages/models/src/linkInfo.generated.ts";
import { z } from "zod";

export type InvoiceListSummaryResponseItem = {
  id: string;
  invoiceNumber?: string | undefined;
  status: InvoiceStatus;
  paymentStatus: InvoicePaymentStatus;
  currency: Currency;
  grossTotal: string;
  customerId: string;
  customerLegalCompanyName: string;
  billingScheduleId?: string | undefined;
  billingPeriod?: InclusiveDateRange | undefined;
  dueDate?: string | undefined;
  accountingDate: string;
  links: Array<LinkInfo>;
};

export const invoiceListSummaryResponseItem = z.object({
  id: z.string(),
  invoiceNumber: z.string().optional(),
  status: invoiceStatus,
  paymentStatus: invoicePaymentStatus,
  currency: currency,
  grossTotal: z.string(),
  customerId: z.string(),
  customerLegalCompanyName: z.string(),
  billingScheduleId: z.string().optional(),
  billingPeriod: inclusiveDateRange.optional(),
  dueDate: z.string().optional(),
  accountingDate: z.string(),
  links: z.array(linkInfo),
});
