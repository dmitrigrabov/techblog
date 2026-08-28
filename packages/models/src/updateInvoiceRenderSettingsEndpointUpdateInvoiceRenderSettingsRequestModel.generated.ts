import {
  type PaymentLinkDisplayOption,
  paymentLinkDisplayOption,
} from "packages/models/src/paymentLinkDisplayOption.generated.ts";
import {
  type CurrencyConversionDisplayOption,
  currencyConversionDisplayOption,
} from "packages/models/src/currencyConversionDisplayOption.generated.ts";
import { z } from "zod";

export type UpdateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel = {
  paymentLinkDisplay: PaymentLinkDisplayOption;
  currencyConversionDisplay?: CurrencyConversionDisplayOption | undefined;
};

export const updateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel = z.object({
  paymentLinkDisplay: paymentLinkDisplayOption,
  currencyConversionDisplay: currencyConversionDisplayOption.optional(),
});
