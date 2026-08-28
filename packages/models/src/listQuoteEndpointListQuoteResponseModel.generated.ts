import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { type QuoteStatus, quoteStatus } from "packages/models/src/quoteStatus.generated.ts";
import { type QuoteDealType, quoteDealType } from "packages/models/src/quoteDealType.generated.ts";
import { z } from "zod";

export type ListQuoteEndpointListQuoteResponseModel = {
  id: string;
  createdBy: string;
  customerId?: string | undefined;
  quoteNumber: string;
  title?: string | undefined;
  currency?: Currency | undefined;
  status: QuoteStatus;
  dealType?: QuoteDealType | undefined;
  preliminaryBillingStartDate?: string | undefined;
  expiresAt?: string | undefined;
  publishedAt?: string | undefined;
  acceptedAt?: string | undefined;
  executedAt?: string | undefined;
  createdAt: string;
  updatedAt: string;
  billingScheduleId?: string | undefined;
  expiryDays?: number | undefined;
  archivedAt?: string | undefined;
  isExpired: boolean;
};

export const listQuoteEndpointListQuoteResponseModel = z.object({
  id: z.string(),
  createdBy: z.string(),
  customerId: z.string().optional(),
  quoteNumber: z.string(),
  title: z.string().optional(),
  currency: currency.optional(),
  status: quoteStatus,
  dealType: quoteDealType.optional(),
  preliminaryBillingStartDate: z.string().optional(),
  expiresAt: z.string().optional(),
  publishedAt: z.string().optional(),
  acceptedAt: z.string().optional(),
  executedAt: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  billingScheduleId: z.string().optional(),
  expiryDays: z.number().int().optional(),
  archivedAt: z.string().optional(),
  isExpired: z.boolean(),
});
