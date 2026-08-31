import {
  type PaymentLinkDisplayOption,
  paymentLinkDisplayOption,
} from "packages/models/src/paymentLinkDisplayOption.generated.ts";
import {
  type CurrencyConversionDisplayOption,
  currencyConversionDisplayOption,
} from "packages/models/src/currencyConversionDisplayOption.generated.ts";
import { z } from "zod";

export type UpdateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel = {
  id: string;
  paymentLinkDisplay: PaymentLinkDisplayOption;
  currencyConversionDisplay: CurrencyConversionDisplayOption;
};

export const updateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel =
  z.object({
    id: z.string(),
    paymentLinkDisplay: paymentLinkDisplayOption,
    currencyConversionDisplay: currencyConversionDisplayOption,
  });
