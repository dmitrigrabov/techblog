import { z } from "zod";

export type CurrencyConversionDisplayOption =
  | "SHOW_CURRENCY_CONVERSION"
  | "HIDE_CURRENCY_CONVERSION";

export const currencyConversionDisplayOption = z.enum([
  "SHOW_CURRENCY_CONVERSION",
  "HIDE_CURRENCY_CONVERSION",
]);
