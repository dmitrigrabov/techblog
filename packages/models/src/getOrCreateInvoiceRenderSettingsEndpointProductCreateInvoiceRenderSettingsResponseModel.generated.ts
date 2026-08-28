import {
  type PaymentLinkDisplayOption,
  paymentLinkDisplayOption,
} from "packages/models/src/paymentLinkDisplayOption.generated.ts";
import {
  type CurrencyConversionDisplayOption,
  currencyConversionDisplayOption,
} from "packages/models/src/currencyConversionDisplayOption.generated.ts";
import { z } from "zod";

export type GetOrCreateInvoiceRenderSettingsEndpointProductCreateInvoiceRenderSettingsResponseModel =
  {
    id: string;
    paymentLinkDisplay: PaymentLinkDisplayOption;
    currencyConversionDisplay: CurrencyConversionDisplayOption;
  };

export const getOrCreateInvoiceRenderSettingsEndpointProductCreateInvoiceRenderSettingsResponseModel =
  z.object({
    id: z.string(),
    paymentLinkDisplay: paymentLinkDisplayOption,
    currencyConversionDisplay: currencyConversionDisplayOption,
  });
